import React from "react"

import HoiCategory from "../containers/HoiCategory"

export default class CategoryList extends React.Component {
  render() {
    let { categories } = this.props

    return (
      <div className="fullWidth">
        <h1>Category List</h1>
        <div className="scroll maxHeight500">
          {categories.map((category, index) => <HoiCategory category={category} key={index} />)}
        </div>
      </div>
    )
  }
}
