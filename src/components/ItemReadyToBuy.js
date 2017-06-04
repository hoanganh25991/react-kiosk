import React from "react"
export default class ItemReadyToBuy extends React.Component {
  render() {
    let { item } = this.props
    let { addItemReadyToBuyToBag } = this.props
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
          <div className="flexColumn flexCenter">
            <button className="addBtn" onClick={e => addItemReadyToBuyToBag(item.id)}>+Add</button>
          </div>
        </div>
      )
    )
  }
}
