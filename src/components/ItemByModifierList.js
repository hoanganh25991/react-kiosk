import React from "react"
import * as c from "../actions/const-name"
import SwapItemByModifierType from "./SwapItemByModifierType"

export default class ItemByModifierList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAutoSelectOnLoadRun: null
    }
  }

  normalizeData = () => {
    let { normalizeItemsByModifier, modifier_id } = this.props
    normalizeItemsByModifier(modifier_id)
  }

  componentDidUpdate() {
    this.normalizeData()
    let { getItemsByModifier, modifier_id } = this.props
    let items = getItemsByModifier(modifier_id)
    let { getModifier } = this.props
    let modifier = getModifier(modifier_id)
    let { isAutoSelectOnLoadRun } = this.state
    if (!isAutoSelectOnLoadRun && modifier && items && items.length > 0) {
      this.autoSelectOnLoad()
    }
  }

  componentDidMount() {
    this.normalizeData()
  }

  autoSelectOnLoad = () => {
    let type = this.getItemByModifierType()
    let { getItemsByModifier, modifier_id } = this.props
    let items = getItemsByModifier(modifier_id)
    let { getModifier } = this.props
    let modifier = getModifier(modifier_id)

    let item_by_modifier_id = items[0].id
    let { mandatory } = modifier
    let { addItemByModifierToBag, addItemByModifierCheckboxRowToBag } = this.props
    // When this component mounted to page
    // What if needed data not load enought
    switch (type) {
      case c.ITEM_BY_MODIFIER: {
        if (mandatory) {
          console.log("ItemByModifierList execute addItemByModifierToBag")
          addItemByModifierToBag(modifier_id, item_by_modifier_id)
        }
        break
      }
      default: {
        if (mandatory) {
          console.log("ItemByModifierList execute addItemByModifierCheckboxRowToBag")
          addItemByModifierCheckboxRowToBag(modifier_id, item_by_modifier_id)
        }
        break
      }
    }
    let isAutoSelectOnLoadRun = true
    this.setState({ isAutoSelectOnLoadRun })
  }

  getItemByModifierType = () => {
    let { getItemsByModifier, modifier_id } = this.props

    let items = getItemsByModifier(modifier_id)
    let { getModifier } = this.props
    let modifier = getModifier(modifier_id)
    let { itemParentOfModifier } = this.props
    let sameDisplayName = modifier.display_name === itemParentOfModifier.display_name
    let modifierHasMoreThanOneItem = items && items.length === 1
    let itemByModifierType = sameDisplayName && modifierHasMoreThanOneItem

    let type
    if (itemByModifierType) {
      type = c.ITEM_BY_MODIFIER
    } else {
      type = c.ITEM_BY_MODIFIER_CHECKBOX_ROW
    }

    return type
  }

  render() {
    let { getItemsByModifier, modifier_id } = this.props
    let items = getItemsByModifier(modifier_id)
    let { getModifier } = this.props
    let modifier = getModifier(modifier_id)
    let type = this.getItemByModifierType()

    return (
      <div>
        {items && items.length > 0
          ? items.map((item, index) => <SwapItemByModifierType {...{ item, type, key: item.id, modifier }} />)
          : <p>No items found on modifier, id: {modifier_id}</p>}
      </div>
    )
  }
}
