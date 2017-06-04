import React from "react"

export default class ModifierBagItemInfoRow extends React.Component {
  render() {
    let { bagItem, order } = this.props
    let { children } = bagItem
    let { actionAddItemAsComboQuantity } = this.props
    let { item_id, lastItemIdUpdatedTimestamp } = bagItem
    return (
      <div>
        <div className="flexRow">
          <div className="width20">{order + 1}.</div>
          <div className="flex1 flexRow">
            <span className="inlineBlock width100 tcLongTxt">{bagItem.display_name}</span>
            <span className="inlineBlock width75">Price: {bagItem.item_price} </span>
            <span className="inlineBlock width75">Quanity: {bagItem.quantity}</span>
          </div>
          <div>
            <button
              className="addBtn width40"
              onClick={e => actionAddItemAsComboQuantity(item_id, -1, lastItemIdUpdatedTimestamp)}
            >
              -
            </button>
            <button
              className="addBtn width40"
              onClick={e => actionAddItemAsComboQuantity(item_id, +1, lastItemIdUpdatedTimestamp)}
            >
              +
            </button>
          </div>
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
