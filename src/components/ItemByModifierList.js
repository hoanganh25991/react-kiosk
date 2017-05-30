import React from "react"
import HoiItemByModifier from "../containers/HoiItemByModifier"

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
    let { itemsByModifier, modifier_id } = this.props

    let items = itemsByModifier[modifier_id]
    let { byModifier } = this.props
    let modifier = byModifier(modifier_id)

    return (
      <div>
        {items && items.length > 0
          ? items.map((item, key) => <HoiItemByModifier {...{ item, key, modifier }} />)
          : <p>No items found on modifier, id: {modifier_id}</p>}
      </div>
    )
  }
}
