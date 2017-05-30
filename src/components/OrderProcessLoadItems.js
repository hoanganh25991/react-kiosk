import React from "react"

import HoiSubCategoryList from "../containers/HoiSubCategoryList"
import HoiItemList from "../containers/HoiItemList"

export default class OrderProcessLoadItems extends React.Component {
  render() {
    let { order } = this.props

    let { category_id } = order

    return (
      <div className="fullWidth">
        <HoiSubCategoryList categoryId={category_id} />
        <HoiItemList categoryId={category_id} />
      </div>
    )
  }
}
