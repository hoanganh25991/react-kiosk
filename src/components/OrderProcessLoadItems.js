import React from "react"

import HoiSubCategoryList from "../containers/HoiSubCategoryList"

export default class OrderProcessLoadItems extends React.Component {
  render() {
    let { order } = this.props

    let { category_id } = order

    return (
      <div className="fullWidth">
        <HoiSubCategoryList category_id={category_id} />
      </div>
    )
  }
}
