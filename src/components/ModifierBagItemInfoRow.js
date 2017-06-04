import React from "react"

export default class ModifierBagItemInfoRow extends React.Component {
  render() {
    let { bagItem, order } = this.props
    let { children } = bagItem
    return (
      <div>
        <div>
          <span>{order + 1}.</span>
          <span>{bagItem.display_name}</span>
          <span>Price: {bagItem.item_price} </span>
          <span>Quanity: {bagItem.quantity}</span>
        </div>
        <ul className="childrenItemList">
          {children.map((itemXX, key) => (
            <li {...{ key }}>
              <span>{itemXX.display_name}</span>
              <span>Price: {itemXX.item_price} </span>
              <span>Quanity: {itemXX.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
