import React from "react"
export default class Item extends React.Component {
  render() {
    let { item } = this.props
    let { chooseItem } = this.props
    return <div onClick={e => chooseItem(item.id)}>{item.display_name}</div>
  }
}
