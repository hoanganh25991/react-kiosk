import React from "react"
import * as c from "../actions/const-name"

import BagItemRowInfo from "./BagItemRowInfo"

export default class OrderInfo extends React.Component {
  render() {
    let { bag } = this.props
    let normal_bag_items = bag.filter(bagItem => bagItem.type === c.NORMAL_BAG_ITEM)
    return (
      <div>
        <h1>Order Info</h1>
        <h3>Normal bag items</h3>
        {normal_bag_items.map((bagItem, key) => <BagItemRowInfo {...{ bagItem, key, order: key }} />)}
      </div>
    )
  }
}
