import React from "react"

export default class ChangeItemReadyToBuyPanel extends React.Component {
  render() {
    let { addItemReadyToBuyToBag, item_id } = this.props
    return (
      <div className="flexColumn flexCenter">
        <button className="addBtn" onClick={e => addItemReadyToBuyToBag(item_id)}>+Add</button>
      </div>
    )
  }
}
