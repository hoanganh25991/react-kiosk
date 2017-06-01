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
    let { getItemsByModifier, modifier_id } = this.props

    let items = getItemsByModifier(modifier_id)
    let { getModifier } = this.props
    let modifier = getModifier(modifier_id)
    let { mandatory, multi_select } = modifier
    let { getInstructionMsg } = this.props
    let instructionMsg = getInstructionMsg(mandatory, multi_select)

    return (
      <div>
        <h4>{instructionMsg}</h4>
        {items && items.length > 0
          ? items.map((item, index) => <HoiItemByModifier {...{ item, key: item.id, modifier }} />)
          : <p>No items found on modifier, id: {modifier_id}</p>}
      </div>
    )
  }
}
