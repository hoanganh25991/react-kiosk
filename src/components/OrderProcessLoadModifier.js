import React from "react"

import HoiSubCategoryList from "../containers/HoiSubCategoryList"
import HoiItemList from "../containers/HoiItemList"

export default class OrderProcessLoadModifier extends React.Component {
  render() {
    let { order } = this.props

    let { item_id } = order

    return (
      <div className="fullWidth">
        <h1>Choose your flavour</h1>
        <div className="maxHeight500 scroll">
          <HoiSubCategoryList categoryId={item_id} />
          <HoiItemList categoryId={item_id} />
        </div>
      </div>
    )
  }
}
