import React from "react"

export default class ChangeComboPanel extends React.Component {
  render() {
    let { actionAddSingleItemByModifierAsComboToBag, modifier_id, item_by_modifier_id } = this.props
    let { singleItemByModifierAsComboQuantity } = this.props
    return (
      <div className="flexColumn flexCenter">
        <div className="flexRow flexItemCenter">
          <button
            className="addBtn width20"
            onClick={e => actionAddSingleItemByModifierAsComboToBag(modifier_id, item_by_modifier_id, -1)}
          >
            -
          </button>
          <span className="textCenter width40">{singleItemByModifierAsComboQuantity}</span>
          <button
            className="addBtn width20"
            onClick={e => actionAddSingleItemByModifierAsComboToBag(modifier_id, item_by_modifier_id, +1)}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}