import React from "react"

export default class ItemByModifier extends React.Component {
  render() {
    let { item } = this.props
    return <div>{item.display_name}</div>
  }
}
