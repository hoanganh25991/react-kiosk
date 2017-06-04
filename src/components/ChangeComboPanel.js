import React from "react"

export default class ChangeComboPanel extends React.Component {
  render() {
    let {
      actionAddSingleItemByModifierAsComboToBag,
      actionRemoveSingleItemByModifierAsComboToBag,
      modifier_id,
      item_by_modifier_id
    } = this.props
    let { getItemByModifierQuanity } = this.props
    return (
      <div className="flexColumn flexCenter">
        <div className="flexRow flexItemCenter">
          <button
            className="addBtn width20"
            onClick={e => actionRemoveSingleItemByModifierAsComboToBag(modifier_id, item_by_modifier_id)}
          >
            -
          </button>
          <span className="textCenter width40">{getItemByModifierQuanity()}</span>
          <button
            className="addBtn width20"
            onClick={e => actionAddSingleItemByModifierAsComboToBag(modifier_id, item_by_modifier_id)}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}
