import React from "react"

export default class CategoryItem extends React.Component {
  render() {
    let { category } = this.props

    return (
      <div>
        <h3>{category.display_name}</h3>
      </div>
    )
  }
}
