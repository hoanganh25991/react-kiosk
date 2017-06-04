import React from "react"
import HoiItem from "../containers/HoiItem"

export default class ItemByCategoryList extends React.Component {
  render() {
    let { items } = this.props
    return (
      <div>
        {items && items.length > 0 ? items.map((item, index) => <HoiItem {...{ item, key: item.id }} />) : null}
      </div>
    )
  }
}
