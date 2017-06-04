import React from "react"
import HoiModifier from "../containers/HoiModifier"

export default class ModifierList extends React.Component {
  render() {
    let { modifiers } = this.props
    let { actionAddBagTemporaryItemToBagAndCloseLoadModifiers } = this.props
    let { actionRemoveBagTemporaryItemBeingEditedAndMoveToLoadItems } = this.props
    return (
      <div className="flexColumn">
        <div className="flexRow">
          <div className="flex1" />
          <button
            className="addBtn fontSize15"
            onClick={e => actionRemoveBagTemporaryItemBeingEditedAndMoveToLoadItems()}
          >
            x
          </button>
        </div>
        {modifiers && modifiers.length > 0
          ? modifiers.map(modifier => <HoiModifier {...{ modifier, key: modifier.id }} />)
          : <p>No modifier found on this item</p>}
        <div className="flexRow">
          <button className="addBtn fontSize15" onClick={e => actionAddBagTemporaryItemToBagAndCloseLoadModifiers()}>
            +ADD TO ORDER
          </button>
          <div className="flex1" />
        </div>
      </div>
    )
  }
}
