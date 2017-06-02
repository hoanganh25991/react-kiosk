import React from "react"

export default class AddItemByModifierBtn extends React.Component {
  render() {
    let { addItemByModifierToBag, removeItemByModifierToBag, modifier_id, item_by_modifier_id } = this.props
    let { getItemByModifierQuanity } = this.props
    return (
      <div className="flexColumn flexCenter">
        <div className="flexRow">
          <span
            className="addBtn width20"
            onClick={e => removeItemByModifierToBag(modifier_id, item_by_modifier_id)}
          >{` - `}</span>
          <span className="textCenter width40">{getItemByModifierQuanity()}</span>
          <span
            className="addBtn width20"
            onClick={e => addItemByModifierToBag(modifier_id, item_by_modifier_id)}
          >{` + `}</span>
        </div>
      </div>
    )
  }
}
