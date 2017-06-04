import React from "react"
import HoiModifier from "../containers/HoiModifier"

export default class ModifierList extends React.Component {
  render() {
    let { modifiers } = this.props
    let { actionAddBagTemporaryItemToBagAndCloseLoadModifiers } = this.props
    return (
      <div className="flexColumn">
        <div className="flexRow">
          <div className="flex1" />
          <button className="addBtn">x</button>
        </div>
        {modifiers && modifiers.length > 0
          ? modifiers.map(modifier => <HoiModifier {...{ modifier, key: modifier.id }} />)
          : <p>No modifier found on this item</p>}
        <div className="flexRow">
          <button className="addBtn" onClick={e => actionAddBagTemporaryItemToBagAndCloseLoadModifiers()}>
            +ADD TO ORDER
          </button>
          <div className="flex1" />
        </div>
      </div>
    )
  }
}
