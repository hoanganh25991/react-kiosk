import React from "react"

export default class Category extends React.Component {
  render() {
    let { category } = this.props

    let { chooseCategory } = this.props

    let { isSelected } = this.props

    let className = ""
    className = isSelected(category.id) ? className + " selected" : className

    return (
      <div className={className} onClick={e => chooseCategory(category.id)}>
        <h3>{category.display_name}</h3>
      </div>
    )
  }
}
