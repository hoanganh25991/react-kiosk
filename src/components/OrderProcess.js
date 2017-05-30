import React from "react"
import * as c from "../actions/const-name"

import HoiOrderProcessLoadItems from "../containers/HoiOrderProcessLoadItems"
import HoiOrderProcessLoadModifiers from "../containers/HoiOrderProcessLoadModifiers"

export default class OrderProcess extends React.Component {
  stepTitle = step => {
    let title
    switch (step) {
      case null: {
        title = <h1>Please choose one category</h1>
        break
      }
      case c.ORDER_PROCESS_STEP_LOAD_ITEMS: {
        title = <h1>Pick one item</h1>
        break
      }
      case c.ORDER_PROCESS_STEP_LOAD_MODIFIERS: {
        title = <h1>Choose your favour</h1>
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
        {this.stepTitle(step)}
        <div className="flex1 scroll">
          {step === null
            ? <div />
            : step === c.ORDER_PROCESS_STEP_LOAD_ITEMS
                ? <HoiOrderProcessLoadItems />
                : step === c.ORDER_PROCESS_STEP_LOAD_MODIFIERS ? <HoiOrderProcessLoadModifiers /> : null}
        </div>
        {step !== null ? <div>Back|Next</div> : null}
      </div>
    )
  }
}
