import React from "react"
import HoiItemByModifierCheckboxRow from "../containers/HoiItemByModifierCheckboxRow"
export default class ItemByModifierCheckboxRowList extends React.Component {
  render() {
    let { items, modifier } = this.props
    return (
      <div>
        {items && items.length > 0
          ? items.map(item => <HoiItemByModifierCheckboxRow {...{ item, key: item.id, modifier }} />)
          : <p>No items found on modifier</p>}
      </div>
    )
  }
}
