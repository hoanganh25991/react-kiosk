import React from "react"

export default class ItemByModifierCheckboxRow extends React.Component {
  removeItemByModifier = e => {
    e.preventDefault()
    let { item } = this.props
    let { modifier } = this.props
    let { actionAddItemByModifierToBagTemporary } = this.props
    actionAddItemByModifierToBagTemporary(modifier.id, item.id, -1)
  }

  render() {
    let { item } = this.props
    let { modifier } = this.props
    let { itemByModifierQuantityTemporary } = this.props
    let { actionAddItemByModifierToBagTemporary } = this.props
    return (
      <div className="padding10" onClick={e => actionAddItemByModifierToBagTemporary(modifier.id, item.id, 1)}>
        {[...Array(itemByModifierQuantityTemporary).keys()].map(key => (
          <input key={key} type="checkbox" checked={true} onChange={e => this.removeItemByModifier(e)} />
        ))}
        <span>{item.display_name}</span>
      </div>
    )
  }
}
