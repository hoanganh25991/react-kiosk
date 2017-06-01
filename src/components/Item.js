import React from "react"
export default class Item extends React.Component {
  normalizeData() {
    let { normalizeModifiersByItem, item: { id: item_id } } = this.props
    normalizeModifiersByItem(item_id)
  }

  componentDidUpdate() {
    //this.normalizeData()
  }

  componentDidMount() {
    this.normalizeData()
  }

  render() {
    let { item } = this.props
    let { clickOnItem } = this.props
    let { isSelected } = this.props
    let { getItemPrice } = this.props
    let itemPrice = getItemPrice(item)

    let className = ""
    className = isSelected(item.id) ? className + " selected" : className

    return (
      <div className={className} onClick={e => clickOnItem(item.id)}>
        <img src={item.photo_file_url} className="thumb" alt={item.display_name} />
        <p>{item.display_name}, Id: {item.id}</p>
        {itemPrice ? <p>Price: {itemPrice}</p> : null}
      </div>
    )
  }
}
