import React from "react"

export default class AddItemBtn extends React.Component {
  render() {
    let { clickOnItem, item_id } = this.props
    return (
      <div className="flexColumn flexCenter">
        <span className="addBtn" onClick={e => clickOnItem(item_id)}>+Add</span>
      </div>
    )
  }
}
