import React from "react"
import HoiItem from "../containers/HoiItem"

export default class ItemList extends React.Component {
  normalizeData = () => {
    let { normalizeItemsByCategory } = this.props
    let { category_id } = this.props
    normalizeItemsByCategory(category_id)
  }

  componentDidUpdate() {
    this.normalizeData()
  }

  componentDidMount() {
    this.normalizeData()
  }

  render() {
    let { getItemsByCategory, category_id } = this.props
    let items = getItemsByCategory(category_id)

    return (
      <div>
        {items && items.length > 0 ? items.map((item, index) => <HoiItem {...{ item, key: item.id }} />) : null}
      </div>
    )
  }
}
