import React from "react"
export default class Item extends React.Component {
  render() {
    let { item } = this.props
    let { chooseItem } = this.props
    let { isSelected } = this.props

    let className = ""
    className = isSelected(item.id) ? className + " selected" : className

    return (
      <div className={className} onClick={e => chooseItem(item.id)}>
        <img src={item.photo_file_url} className="thumb" />
        <p>{item.display_name}</p>
      </div>
    )
  }
}
