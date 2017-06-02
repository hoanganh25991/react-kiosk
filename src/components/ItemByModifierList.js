import React from "react"
import * as c from "../actions/const-name"
import SwapItemByModifierType from "./SwapItemByModifierType"

export default class ItemByModifierList extends React.Component {
  normalizeData = () => {
    let { normalizeItemsByModifier, modifier_id } = this.props
    normalizeItemsByModifier(modifier_id)
  }

  componentDidUpdate() {
    this.normalizeData()
  }

  componentDidMount() {
    this.normalizeData()
  }

  render() {
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

    return (
      <div>
        {items && items.length > 0
          ? items.map((item, index) => <SwapItemByModifierType {...{ item, type, key: item.id, modifier }} />)
          : <p>No items found on modifier, id: {modifier_id}</p>}
      </div>
    )
  }
}
