import React from "react"
import HoiItemReadyToBuy from "../containers/HoiItemReadyToBuy"
import HoiItemHasModifiers from "../containers/HoiItemHasModifiers"

export default class Item extends React.Component {
  normalizeData = () => {
    let { normalizeModifiersByItem, item: { id: item_id } } = this.props
    normalizeModifiersByItem(item_id)
  }

  componentDidUpdate() {
    this.normalizeData()
  }

  componentDidMount() {
    this.normalizeData()
  }

  render() {
    let { item } = this.props
    let { isSelected } = this.props
    let { getHasModifiers } = this.props
    let hasModifiers = getHasModifiers(item.id)

    let className = ""
    className = isSelected(item.id) ? className + " selected" : className

    return (
      <div className={className}>
        {hasModifiers ? <HoiItemHasModifiers {...{ item }} /> : <HoiItemReadyToBuy {...{ item }} />}
      </div>
    )
  }
}
