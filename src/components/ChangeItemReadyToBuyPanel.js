import React from "react"

export default class ChangeItemReadyToBuyPanel extends React.Component {
  render() {
    let { actionAddItemReadyToBuyToBag, item_id } = this.props
    return (
      <div className="flexColumn flexCenter">
        <button className="addBtn" onClick={e => actionAddItemReadyToBuyToBag(item_id, -1)}>-</button>
        <span className="textCenter width40">1</span>
        <button className="addBtn" onClick={e => actionAddItemReadyToBuyToBag(item_id, +1)}>+</button>
      </div>
    )
  }
}
