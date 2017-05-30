import React from "react"
import Item from "./Item"

export default class ItemByModifier extends React.Component {
  render() {
    let { item } = this.props
    let dump = () => {}
    let isSelected = dump
    let chooseItem = dump
    return (
      <div>
        <Item {...{ item, isSelected, chooseItem }} />
      </div>
    )
  }
}
