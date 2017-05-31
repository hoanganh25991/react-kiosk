import React from "react"

export default class BagItemRowInfo extends React.Component {
  render() {
    let { bagItem, order } = this.props
    return (
      <div>
        <span>{order + 1}.</span>
        <span>{bagItem.display_name}</span>
        <span>Price: {bagItem.item_price} </span>
        <span>Quanity: {bagItem.quanity}</span>
      </div>
    )
  }
}
