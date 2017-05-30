import React from "react"
import HoiModifier from "../containers/HoiModifier"

export default class ModifierList extends React.Component {
  componentDidUpdate() {
    // let { normalizeItemsByCategory } = this.props
    // let { categoryId } = this.props
    // normalizeItemsByCategory(categoryId)
  }

  componentDidMount() {
    // let { normalizeItemsByCategory } = this.props
    // let { categoryId } = this.props
    // normalizeItemsByCategory(categoryId)
  }

  render() {
    let { modifiersByItem, itemId } = this.props
    let modifiers = modifiersByItem[itemId]

    return (
      <div className="fullWidth">
        <h3>Modifier list</h3>
        {modifiers && modifiers.length > 0
          ? <div className="scroll maxHeight500">
              {modifiers.map((item, index) => <HoiModifier item={item} key={index} />)}
            </div>
          : <p>No modifier by this item, id: {itemId}</p>}
      </div>
    )
  }
}
