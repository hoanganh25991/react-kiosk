import React from "react"
import * as c from "../actions/const-name"

import HoiOrderProcessLoadItems from "../containers/HoiOrderProcessLoadItems"
import HoiOrderProcessLoadModifiers from "../containers/HoiOrderProcessLoadModifiers"

export default class OrderProcess extends React.Component {
  stepTitle = step => {
    let title
    switch (step) {
      case null: {
        title = "Please choose one category"
        break
      }
      case c.ORDER_PROCESS_STEP_LOAD_ITEMS: {
        title = "Pick one item"
        break
      }
      case c.ORDER_PROCESS_STEP_LOAD_MODIFIERS: {
        title = "Choose your favour"
        break
      }
      default:
        title = null
    }

    return title
  }

  render() {
    let { order } = this.props
    let { step } = order

    return (
      <div className="fullWidth fullHeight flexColumn">
        <h1>{this.stepTitle(step)}</h1>
        <div className="flex1 scroll">
          {step === null ? <div /> : null}
          {step === c.ORDER_PROCESS_STEP_LOAD_ITEMS ? <HoiOrderProcessLoadItems /> : null}
          {step === c.ORDER_PROCESS_STEP_LOAD_MODIFIERS ? <HoiOrderProcessLoadModifiers /> : null}
        </div>
        {step !== null ? <div>Back|Next</div> : null}
      </div>
    )
  }
}
