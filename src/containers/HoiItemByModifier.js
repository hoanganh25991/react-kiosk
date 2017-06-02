import { connect } from "react-redux"
import ItemByModifier from "../components/ItemByModifier"
// import { actionAddItemByModifierToBag } from "../actions"

const mapStateToProps = ({ order }) => {
  let isSelected = (modifier_id, item_by_modifier_id) => {
    let { bag, item_id } = order
    let currBagItem = bag.filter(bagItem => bagItem.item_id === item_id)[0]
    if (currBagItem) {
      let { children: { [modifier_id]: modifier } } = currBagItem
      return Boolean(modifier && modifier.filter(item => item.item_by_modifier_id === item_by_modifier_id).length > 0)
    }
    return false
  }
  return { isSelected }
}

const mapActionToProps = dispatch => ({
  // addItemByModifierToBag: (modifier_id, item_by_modifier_id) =>
  //   dispatch(actionAddItemByModifierToBag(modifier_id, item_by_modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifier)
