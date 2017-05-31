import { connect } from "react-redux"
import Item from "../components/Item"
import { actionNormalizeModifiersByItem, actionChooseItemOrAddToBag } from "../actions"

const basePrice = "price1"
const mapStateToProps = ({ order, modifiersByItem }) => {
  let { item_id: orderItemId } = order

  let getItemPrice = item => {
    let { id: item_id } = item
    let filteredModifiers = modifiersByItem[item_id]

    if (filteredModifiers && filteredModifiers.length > 0) {
      return null
    }

    return item[basePrice]
  }

  return {
    isSelected: item_id => item_id === orderItemId,
    getItemPrice
  }
}

const mapActionToProps = dispatch => ({
  normalizeModifiersByItem: item_id => dispatch(actionNormalizeModifiersByItem(item_id)),
  clickOnItem: item_id => dispatch(actionChooseItemOrAddToBag(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(Item)
