import React from "react"
import HoiItem from "../containers/HoiItem"

export default class ItemList extends React.Component {
  componentDidUpdate() {
    let { normalizeItemsByCategory } = this.props
    let { categoryId } = this.props
    normalizeItemsByCategory(categoryId)
  }

  componentDidMount() {
    let { normalizeItemsByCategory } = this.props
    let { categoryId } = this.props
    normalizeItemsByCategory(categoryId)
  }

  render() {
    let { itemsByCategory, categoryId } = this.props
    let items = itemsByCategory[categoryId]

    return (
      <div className="fullWidth">
        <h3>Item list</h3>
        {items && items.length > 0
          ? <div className="scroll maxHeight500">
              {items.map((item, index) => <HoiItem item={item} key={index} />)}
            </div>
          : <p>No item by this category, id: {categoryId}</p>}
      </div>
    )
  }
}
