import React from "react"
import HoiItemByModifierList from "../containers/HoiItemByModifierList"
export default class Item extends React.Component {
  render() {
    let { modifier } = this.props
    let { item } = this.props
    let { getTotalItemsByModifier } = this.props
    let { id: modifier_id } = modifier
    let totalItemsByModifier = getTotalItemsByModifier(modifier_id)
    let modifierOrItemForTitle = totalItemsByModifier > 1 ? modifier : item
    return (
      <div>
        <h3 className="bgYellow">{modifierOrItemForTitle.display_name}, Id: {modifierOrItemForTitle.id}</h3>
        <HoiItemByModifierList {...{ modifier_id }} />
      </div>
    )
  }
}
