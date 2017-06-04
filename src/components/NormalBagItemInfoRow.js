import React from "react"

export default class NormalBagItemInfoRow extends React.Component {
  render() {
    let { bagItem, order } = this.props
    let { actionAddItemReadyToBuyToBag } = this.props
    let { item_id } = bagItem
    return (
      <div className="flexRow">
        <div className="width20">{order + 1}.</div>
        <div className="flex1 flexRow">
          <span className="inlineBlock width100 tcLongTxt">{bagItem.display_name}</span>
          <span className="inlineBlock width75">Price: {bagItem.item_price} </span>
          <span className="inlineBlock width75">Quanity: {bagItem.quantity}</span>
        </div>
        <div>
          <button className="addBtn width40" onClick={e => actionAddItemReadyToBuyToBag(item_id, -1)}>-</button>
          <button className="addBtn width40" onClick={e => actionAddItemReadyToBuyToBag(item_id, +1)}>+</button>
        </div>
      </div>
    )
  }
}
