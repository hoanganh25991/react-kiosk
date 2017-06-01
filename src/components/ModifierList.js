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
    let { getModifiersByItem, item_id } = this.props
    let modifiers = getModifiersByItem(item_id)

    return (
      <div>
        {modifiers && modifiers.length > 0
          ? modifiers.map((modifier, index) => <HoiModifier {...{ modifier, key: modifier.id }} />)
          : <p>No modifier found on this item, Id: {item_id}</p>}
      </div>
    )
  }
}
