import React from "react"
import * as c from "../actions/const-name"

import HoiOrderProcessLoadItems from "../containers/HoiOrderProcessLoadItems"
import HoiOrderProcessLoadModifiers from "../containers/HoiOrderProcessLoadModifiers"

export default class OrderProcess extends React.Component {
  render() {
    let { order } = this.props
    let { step } = order

    return (
      <div className="fullWidth">
        {step === null
          ? <h1>Please choose one category</h1>
          : step === c.ORDER_PROCESS_STEP_LOAD_ITEMS
              ? <HoiOrderProcessLoadItems />
              : step === c.ORDER_PROCESS_STEP_LOAD_MODIFIERS ? <HoiOrderProcessLoadModifiers /> : null}
      </div>
    )
  }
}
