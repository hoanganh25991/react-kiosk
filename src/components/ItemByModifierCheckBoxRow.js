import React from "react"

export default class ItemByModifierCheckboxRow extends React.Component {
  render() {
    let { item } = this.props
    let { modifier } = this.props
    let { isItemByModifierSelectedTemporary } = this.props
    let { actionAddItemByModifierToBagTemporary } = this.props
    return (
      <div className="padding10" onClick={e => actionAddItemByModifierToBagTemporary(modifier.id, item.id, 1)}>
        <input type="checkbox" checked={isItemByModifierSelectedTemporary} onChange={e => console.log("hello")} />
        <span>{item.display_name}</span>
      </div>
    )
  }
}
