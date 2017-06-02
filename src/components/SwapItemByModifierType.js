import React from "react"
import * as c from "../actions/const-name"
import HoiItemByModifier from "../containers/HoiItemByModifier"
import HoiItemByModifierCheckboxRow from "../containers/HoiItemByModifierCheckboxRow"

export default class SwapItemByModifierType extends React.Component {
  render() {
    let { modifier, item, type } = this.props
    // Base on modifier, decide which item used
    let HoiItemByModifierTypeX
    switch (type) {
      case c.ITEM_BY_MODIFIER: {
        HoiItemByModifierTypeX = HoiItemByModifier
        break
      }
      default: {
        HoiItemByModifierTypeX = HoiItemByModifierCheckboxRow
        break
      }
    }
    return (
      <div>
        <HoiItemByModifierTypeX {...{ item, modifier }} />
      </div>
    )
  }
}
