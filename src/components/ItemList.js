import React from "react"
import HoiItem from "../containers/HoiItem"

export default class ItemList extends React.Component {
  normalizeData = () => {
    let { normalizeItemsByCategory } = this.props
    let { categoryId } = this.props
    normalizeItemsByCategory(categoryId)
  }

  componentDidUpdate() {
    this.normalizeData()
  }

  componentDidMount() {
    this.normalizeData()
  }

  render() {
    let { itemsByCategory, categoryId } = this.props
    let items = itemsByCategory[categoryId]

    return (
      <div>
        {items && items.length > 0 ? items.map((item, index) => <HoiItem item={item} key={index} />) : null}
      </div>
    )
  }
}
