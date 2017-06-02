import React from "react"

export default class AddItemByModifierBtn extends React.Component {
  render() {
    let { addItemByModifierToBag, modifier_id, item_by_modifier_id } = this.props
    return (
      <div className="flexColumn flexCenter">
        <div className="flexRow">
          <span
            className="addBtn"
            onClick={e => addItemByModifierToBag(modifier_id, item_by_modifier_id)}
          >{` - `}</span>
          <span>Quanity</span>
          <span
            className="addBtn"
            onClick={e => addItemByModifierToBag(modifier_id, item_by_modifier_id)}
          >{` + `}</span>
        </div>
      </div>
    )
  }
}
