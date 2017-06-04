import React from "react"
import HoiChangeItemReadyToBuyPanel from "../containers/HoiChangeItemReadyToBuyPanel"
export default class ItemReadyToBuy extends React.Component {
  render() {
    let { item } = this.props
    let { isItemReadyToBuyHadBeenSelected } = this.props
    let className = "flexRow flexCenterc"
    className = isItemReadyToBuyHadBeenSelected ? `${className} selected` : className
    return (
      <div className={className}>
        <div className="flexColumn flex1">
          <img src={item.photo_file_url} className="thumb" alt={item.display_name} />
          <p>{item.display_name}, Id: {item.id}</p>
          <p>Price: {item.price1}</p>
        </div>
        <HoiChangeItemReadyToBuyPanel {...{ item_id: item.id }} />
      </div>
    )
  }
}
