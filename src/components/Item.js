import React from "react"
export default class Item extends React.Component {
  render() {
    let { item } = this.props
    return <div>{item.display_name}</div>
  }
}
