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

    return (
      <div>
        <h3>ItemByModifierList</h3>
        {items && items.length > 0
          ? <div>
              {items.map((item, key) => <HoiItemByModifier {...{ item, key }} />)}
            </div>
          : <p>No items found on modifier, id: {modifier_id}</p>}
      </div>
    )
  }
}
