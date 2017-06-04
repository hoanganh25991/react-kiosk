import React from "react"
import HoiAddItemByModifierBtn from "../containers/HoiChangeComboPanel"

export default class ItemByModifier extends React.Component {
  render() {
    let { item } = this.props
    let { modifier } = this.props
    let { price_level } = modifier
    let { isSelected } = this.props
    let className = "flexRow"
    className = isSelected(modifier.id, item.id) ? `${className} selected` : className

    return (
      <div className={className}>
        <div className="flexColumn flex1">
          <img src={item.photo_file_url} className="thumb" alt={item.display_name} />
          <p>{item.display_name}, Id: {item.id}</p>
          <p>Price: {item[price_level]}</p>
        </div>
        <HoiAddItemByModifierBtn {...{ modifier_id: modifier.id, item_by_modifier_id: item.id }} />
      </div>
    )
  }
}
