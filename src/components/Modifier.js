import React from "react"
export default class Item extends React.Component {
  render() {
    let { modifier } = this.props
    return <div>{modifier.display_name}</div>
  }
}
