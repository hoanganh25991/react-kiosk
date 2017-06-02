import React from "react"
export default class ItemHasModifiers extends React.Component {
  render() {
    let { item } = this.props
    let { clickOnItem } = this.props
    let className = ""

    return (
      <div className={className} onClick={e => clickOnItem(item.id)}>
        <img src={item.photo_file_url} className="thumb" alt={item.display_name} />
        <p>{item.display_name}, Id: {item.id}</p>
      </div>
    )
  }
}
