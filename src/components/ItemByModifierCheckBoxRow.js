import React from "react"

export default class ItemByModifierCheckboxRow extends React.Component {
  render() {
    let { item } = this.props
    let { modifier } = this.props
    let { isSelected } = this.props
    let { addItemByModifierToBag } = this.props
    // Test
    isSelected = () => true
    return (
      <div className="padding10">
        <input type="checkbox" value={isSelected()} onClick={e => addItemByModifierToBag(modifier.id, item.id)} />
        <span>{item.display_name}</span>
      </div>
    )
  }
}
