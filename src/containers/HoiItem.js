import { connect } from "react-redux"
import Item from "../components/Item"
import { actionNormalizeModifiersByItem, actionChooseItemOrAddToBag } from "../actions"

const mapStateToProps = ({ order, modifiersByItem }) => {
  let { item_id: orderItemId } = order

  let getHasModifiers = item_id => {
    let filteredModifiers = modifiersByItem[item_id]
    return filteredModifiers && filteredModifiers.length > 0
  }

  return {
    isSelected: item_id => item_id === orderItemId,
    getHasModifiers
  }
}

const mapActionToProps = dispatch => ({
  normalizeModifiersByItem: item_id => dispatch(actionNormalizeModifiersByItem(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(Item)
