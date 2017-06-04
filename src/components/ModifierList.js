import React from "react"
import HoiModifier from "../containers/HoiModifier"

export default class ModifierList extends React.Component {
  render() {
    let { modifiers } = this.props
    return (
      <div className="flexColumn">
        <div className="flexRow">
          <div className="flex1" />
          <span className="addBtn">x</span>
        </div>
        {modifiers && modifiers.length > 0
          ? modifiers.map(modifier => <HoiModifier {...{ modifier, key: modifier.id }} />)
          : <p>No modifier found on this item</p>}
        <div className="flexRow">
          <span className="addBtn">+ADD TO ORDER</span>
          <div className="flex1" />
        </div>
      </div>
    )
  }
}
