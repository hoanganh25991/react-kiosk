import React from "react"
import HoiItemByModifier from "../containers/HoiItemByModifier"
export default class ItemByModifierList extends React.Component {
  render() {
    let { items, modifier } = this.props

    return (
      <div>
        {items && items.length > 0
          ? items.map(item => <HoiItemByModifier {...{ item, key: item.id, modifier }} />)
          : <p>No items found on modifier</p>}
      </div>
    )
  }
}
