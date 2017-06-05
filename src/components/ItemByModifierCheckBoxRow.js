import React from "react"

export default class ItemByModifierCheckboxRow extends React.Component {
  removeItemByModifier = () => {
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
      <div className="flexRow">
        {[...Array(itemByModifierQuantityTemporary).keys()].map(key => (
          <input key={key} type="checkbox" checked={true} onChange={e => this.removeItemByModifier()} />
        ))}
        <div
          className="flex1 noBorder"
          onClick={e => {
            actionAddItemByModifierToBagTemporary(modifier.id, item.id, 1)
          }}
        >
          <span className="padding10">{item.display_name}</span>
        </div>
      </div>
    )
  }
}
