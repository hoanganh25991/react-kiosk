import React from "react"
import HoiItem from "../containers/HoiItem"

export default class ItemList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    let { categoryId } = this.props

    let { loadItemsByCategory } = this.props

    let items = loadItemsByCategory(categoryId)

    this.setState({ items })
  }

  render() {
    let { items } = this.state

    let { categoryId } = this.props

    console.log("items inside ItemList", items)

    return (
      <div>
        {items.length > 0
          ? items.map((item, index) => <HoiItem item={item} key={index} />)
          : <h3>Cant find any item base on this category, id: {categoryId}</h3>}
      </div>
    )
  }
}
