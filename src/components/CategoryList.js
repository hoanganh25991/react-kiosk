import React from "react"

import HoiItem from "../containers/HoiCategoryItem"

export default class CategoryList extends React.Component {
  render() {
    let { categories } = this.props

    return (
      <div>
        <h1>Category List</h1>
        {categories.map((category, index) => <HoiItem category={category} key={index} />)}
      </div>
    )
  }
}
