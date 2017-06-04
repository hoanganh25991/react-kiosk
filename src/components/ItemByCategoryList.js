import React from "react"
import HoiItemByCategory from "../containers/HoiItemByCategory"

export default class ItemByCategoryList extends React.Component {
  render() {
    let { items } = this.props
    return (
      <div>
        {items && items.length > 0
          ? items.map((item, index) => <HoiItemByCategory {...{ item, key: item.id }} />)
          : null}
      </div>
    )
  }
}
