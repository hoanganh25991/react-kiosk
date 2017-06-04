import React from "react"

export default class NormalBagItemInfoRow extends React.Component {
  render() {
    let { bagItem, order } = this.props
    return (
      <div>
        <span>{order + 1}.</span>
        <span>{bagItem.display_name}</span>
        <span>Price: {bagItem.item_price} </span>
        <span>Quanity: {bagItem.quantity}</span>
      </div>
    )
  }
}
