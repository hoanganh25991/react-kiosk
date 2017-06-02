import React from "react"

export default class ItemByModifierCheckboxRow extends React.Component {
  render() {
    let { item } = this.props
    let { modifier } = this.props
    let { isSelected } = this.props
    let { addItemByModifierCheckboxRowToBag } = this.props
    return (
      <div className="padding10" onClick={e => addItemByModifierCheckboxRowToBag(modifier.id, item.id)}>
        <input type="checkbox" checked={isSelected(modifier.id, item.id)} onChange={e => console.log("hello")} />
        <span>{item.display_name}</span>
      </div>
    )
  }
}
