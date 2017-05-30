import React from "react"

export default class CategoryItemCard extends React.Component {
  render() {
    let { category } = this.props

    return (
      <div className="categoryCard flexColumn">
        <div className="flex1" />
        <h3>{category.display_name}</h3>
      </div>
    )
  }
}
