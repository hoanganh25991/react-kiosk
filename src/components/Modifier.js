import React from "react"
import HoiItemByModifierList from "../containers/HoiItemByModifierList"
export default class Item extends React.Component {
  render() {
    let { modifier } = this.props
    let { id: modifier_id } = modifier
    return (
      <div>
        <h3 className="bgYellow">{modifier.display_name}</h3>
        <HoiItemByModifierList {...{ modifier_id }} />
      </div>
    )
  }
}
