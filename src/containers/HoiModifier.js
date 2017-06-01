import { connect } from "react-redux"
import Modifier from "../components/Modifier"

const mapStateToProps = ({ items, order, itemsByModifier }) => {
  let { item_id } = order
  let item = items.filter(item => item.id === item_id)[0]
  let getTotalItemsByModifier = modifier_id => {
    let filteredItems = itemsByModifier[modifier_id]
    return filteredItems ? filteredItems.length : null
  }
  return { item, getTotalItemsByModifier }
}

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(Modifier)
