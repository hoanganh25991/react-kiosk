import React from "react"

export default class ChangeComboPanelTemporary extends React.Component {
  render() {
    let { actionAddSingleItemByModifierAsComboToBagTemporary, modifier_id, item_by_modifier_id } = this.props
    let { singleItemByModifierAsComboQuantityTemporary } = this.props
    return (
      <div className="flexColumn flexCenter">
        <button
          className="addBtn fontSize15"
          onClick={e => actionAddSingleItemByModifierAsComboToBagTemporary(modifier_id, item_by_modifier_id, -1)}
        >
          -
        </button>
        <span className="textCenter width40">{singleItemByModifierAsComboQuantityTemporary}</span>
        <button
          className="addBtn fontSize15"
          onClick={e => actionAddSingleItemByModifierAsComboToBagTemporary(modifier_id, item_by_modifier_id, +1)}
        >
          +
        </button>
      </div>
    )
  }
}
