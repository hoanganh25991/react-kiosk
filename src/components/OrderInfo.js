import React from "react"
import * as c from "../actions/const-name"

import HoiNormalBagItemInfoRow from "../containers/HoiNormalBagItemInfoRow"
import HoiModifierBagItemInfoRow from "../containers/HoiModifierBagItemInfoRow"

export default class OrderInfo extends React.Component {
  render() {
    let { orderInfo } = this.props
    let normalBagItems = orderInfo.filter(bagItem => bagItem.type === c.NORMAL_BAG_ITEM)
    let modifierBagItems = orderInfo.filter(bagItem => bagItem.type === c.MODIFIER_BAG_ITEM)
    let hasNormalBagItems = normalBagItems.length > 0
    let hasModifierBagItems = modifierBagItems.length > 0
    return (
      <div>
        <h1>Order Info</h1>
        <div className="scroll height200">
          {hasNormalBagItems
            ? <div>
                <h3>Normal bag items</h3>
                {normalBagItems.map((bagItem, key) => <HoiNormalBagItemInfoRow {...{ bagItem, key, order: key }} />)}
              </div>
            : null}
          {hasModifierBagItems
            ? <div>
                <h3>Modifier bag items</h3>
                {modifierBagItems.map((bagItem, key) => (
                  <HoiModifierBagItemInfoRow {...{ bagItem, key, order: key }} />
                ))}
              </div>
            : null}
        </div>
      </div>
    )
  }
}
