import React from "react"

export default class Category extends React.Component {
  render() {
    let { category } = this.props

    let { chooseCategory } = this.props

    return (
      <div onClick={e => chooseCategory(category.id)}>
        <h3>{category.display_name}</h3>
      </div>
    )
  }
}
