import React from "react"

import HoiModifierList from "../containers/HoiModifierList"

export default class OrderProcessLoadModifiers extends React.Component {
  render() {
    let { order } = this.props

    let { item_id } = order

    return (
      <div className="fullWidth">
        <HoiModifierList item_id={item_id} />
      </div>
    )
  }
}
