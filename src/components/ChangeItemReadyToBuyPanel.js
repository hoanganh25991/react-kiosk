import React from "react"

export default class ChangeItemReadyToBuyPanel extends React.Component {
  render() {
    let { actionAddItemReadyToBuyToBag, item_id } = this.props
    let { itemReadyToBuyQuantity } = this.props
    return (
      <div className="flexColumn flexCenter">
        <button className="addBtn fontSize15" onClick={e => actionAddItemReadyToBuyToBag(item_id, -1)}>-</button>
        <span className="textCenter width40">{itemReadyToBuyQuantity}</span>
        <button className="addBtn fontSize15" onClick={e => actionAddItemReadyToBuyToBag(item_id, +1)}>+</button>
      </div>
    )
  }
}
