import React from "react"

import HoiSubCategoryList from "../containers/HoiSubCategoryList"
import HoiItemList from "../containers/HoiItemList"

export default class OrderProcessLoadItems extends React.Component {
  render() {
    let { order } = this.props

    let { category_id } = order

    return (
      <div className="fullWidth">
        <h1>Please choose one</h1>
        <div className="maxHeight500 scroll">
          <HoiSubCategoryList categoryId={category_id} />
          <HoiItemList categoryId={category_id} />
        </div>
      </div>
    )
  }
}
