import React from "react"
import HoiAddItemBtn from "../containers/HoiAddItemBtn"
export default class ItemReadyToBuy extends React.Component {
  render() {
    let { item } = this.props
    let className = "flexRow flexCenter"

    return (
      /* <div className={className} onClick={e => clickOnItem(item.id)}> */
      (
        <div className={className}>
          <div className="flexColumn flex1">
            <img src={item.photo_file_url} className="thumb" alt={item.display_name} />
            <p>{item.display_name}, Id: {item.id}</p>
            <p>Price: {item.price1}</p>
          </div>
          <HoiAddItemBtn {...{ item_id: item.id }} />
        </div>
      )
    )
  }
}
