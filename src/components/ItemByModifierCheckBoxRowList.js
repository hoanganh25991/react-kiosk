import React from "react"
import HoiItemByModifierCheckboxRow from "../containers/HoiItemByModifierCheckboxRow"

export default class ItemByModifierCheckboxRowList extends React.Component {
  render() {
    let { getItemsByModifier, modifier_id } = this.props
    let items = getItemsByModifier(modifier_id)
    let { getModifier } = this.props
    let modifier = getModifier(modifier_id)
    return (
      <div>
        {items && items.length > 0
          ? items.map((item, index) => <HoiItemByModifierCheckboxRow {...{ item, key: item.id, modifier }} />)
          : <p>No items found on modifier, id: {modifier_id}</p>}
      </div>
    )
  }
}
