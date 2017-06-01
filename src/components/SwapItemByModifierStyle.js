import React from "react"
import HoiItemByModifier from "../containers/HoiItemByModifier"
import HoiItemByModifierCheckboxRow from "../containers/HoiItemByModifierCheckboxRow"

export default class SwapItemByModifierStyle extends React.Component {
  render() {
    let { modifier, item, total_items_by_modifier } = this.props
    // Base on modifier, decide which item used
    let HoiItemByModifierStyleX
    switch (true) {
      case total_items_by_modifier === 1: {
        HoiItemByModifierStyleX = HoiItemByModifier
        break
      }
      default: {
        HoiItemByModifierStyleX = HoiItemByModifierCheckboxRow
        break
      }
    }
    return (
      <div>
        <HoiItemByModifierStyleX {...{ item, modifier }} />
      </div>
    )
  }
}
