import React from "react"

import HoiCategory from "../containers/HoiCategory"

export default class CategoryList extends React.Component {
  render() {
    let { categories } = this.props

    return (
      <div className="fullWidth fullHeight">
        <h1>Category List</h1>
        {categories.map((category, key) => <HoiCategory {...{ category, key }} />)}
      </div>
    )
  }
}
