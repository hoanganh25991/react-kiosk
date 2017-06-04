import React from "react"
import * as c from "../actions/const-name"

import BagItemRowInfo from "./BagItemRowInfo"

export default class OrderInfo extends React.Component {
  render() {
    let { orderInfo } = this.props
    return (
      <div>
        <h1>Order Info</h1>
        <h3>Normal bag items</h3>
      </div>
    )
  }
}
