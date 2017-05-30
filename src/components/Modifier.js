import React from "react"
import HoiItemByModifierList from "../containers/HoiItemByModifierList"
export default class Item extends React.Component {
  render() {
    let { modifier } = this.props
    let { id: modifier_id } = modifier
    return (
      <div>
        <div>{modifier.display_name}</div>
        <div>
          <HoiItemByModifierList {...{ modifier_id }} />
        </div>
      </div>
    )
  }
}
