import React from "react"
import HoiItemByModifierList from "../containers/HoiItemByModifierList"
export default class Item extends React.Component {
  render() {
    let { modifier } = this.props
    let { item } = this.props
    let { id: modifier_id } = modifier
    return (
      <div>
        <h3 className="bgYellow">{modifier.display_name}, Id: {modifier.id}</h3>
        <pre>Mandatory: {modifier.mandatory}. Multiselect: {modifier.multi_select}</pre>
        <HoiItemByModifierList {...{ modifier_id }} />
      </div>
    )
  }
}
