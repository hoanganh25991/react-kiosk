import React from "react"

import CategoryCard from "./CategoryCard"

export default class SubCategoryList extends React.Component {
  render() {
    let { categories } = this.props

    return (
      <div className="fullWidth">
        <h1>Sub Category List</h1>
        <div className="height500 flexRow flexSpaceBetween">
          {categories.map((category, index) => <CategoryCard category={category} key={index} />)}
        </div>
      </div>
    )
  }
}
