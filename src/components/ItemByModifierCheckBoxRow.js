import React from "react"

export default class ItemByModifierCheckboxRow extends React.Component {
  render() {
    let { item } = this.props
    let { modifier } = this.props
    let { isSelected } = this.props
    // let { addItemByModifierToBag } = this.props
    return (
      /* <div className="padding10" onClick={e => addItemByModifierToBag(modifier.id, item.id)}> */
      (
        <div className="padding10">
          <input type="checkbox" checked={isSelected(modifier.id, item.id)} onChange={e => console.log("hello")} />
          <span>{item.display_name}</span>
        </div>
      )
    )
  }
}
