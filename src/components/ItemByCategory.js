import React from "react"
import HoiItemReadyToBuy from "../containers/HoiItemReadyToBuy"
import HoiItemHasModifiers from "../containers/HoiItemHasModifiers"

export default class ItemByCategory extends React.Component {
  render() {
    let { item, modifiers } = this.props
    let { isItemByCategoryHadBeenSelected } = this.props
    let hasModifiers = modifiers.length > 0

    let className = ""
    className = isItemByCategoryHadBeenSelected ? `${className} selected` : className
    return (
      <div className={className}>
        {hasModifiers
          ? <HoiItemHasModifiers {...{ item, modifiers }} />
          : <HoiItemReadyToBuy {...{ item, modifiers }} />}
      </div>
    )
  }
}
