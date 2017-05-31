import React from "react"

export default class ItemByModifier extends React.Component {
  render() {
    let { item } = this.props
    let { modifier } = this.props
    let { price_level, multi_select, mandatory } = modifier
    let { addItemByModifierToBag } = this.props

    return (
      <div onClick={e => addItemByModifierToBag("xxx")}>
        <img src={item.photo_file_url} className="thumb" alt={item.display_name} />
        <p>{item.display_name}, Id: {item.id}</p>
        <p>Price: {item[price_level]}</p>
      </div>
    )
  }
}
