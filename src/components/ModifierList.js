import React from "react"
import HoiModifier from "../containers/HoiModifier"

export default class ModifierList extends React.Component {
  normalizeData = () => {
    let { normalizeModifiersByItem } = this.props
    let { item_id } = this.props
    normalizeModifiersByItem(item_id)
  }

  componentDidUpdate() {
    this.normalizeData()
  }

  componentDidMount() {
    this.normalizeData()
  }

  render() {
    let { modifiersByItem, item_id } = this.props
    let modifiers = modifiersByItem[item_id]

    return (
      <div className="fullWidth">
        <h3>Modifier list</h3>
        {modifiers && modifiers.length > 0
          ? <div className="scroll maxHeight500">
              {modifiers.map((modifier, key) => <HoiModifier {...{ modifier, key }} />)}
            </div>
          : <p>No modifier by this item, id: {item_id}</p>}
      </div>
    )
  }
}
