import { connect } from "react-redux"
import ChangeComboPanel from "../components/ChangeComboPanel"
import { actionAddItemByModifierXXXToBag, actionRemoveItemByModifierToBag } from "../actions"

const mapStateToProps = ({ order }) => {
  let { bag, item_id } = order
  let getItemByModifierQuanity = () => {
    let currBagItem = bag.filter(bagItem => bagItem.item_id === item_id)[0]
    if (currBagItem) {
      // This case is quanity of WHOLE BAG
      return currBagItem.quanity
    }

    return 0
  }

  return { getItemByModifierQuanity }
}

const mapActionToProps = dispatch => ({
  addItemByModifierToBag: (modifier_id, item_by_modifier_id) =>
    dispatch(actionAddItemByModifierXXXToBag(modifier_id, item_by_modifier_id)),
  removeItemByModifierToBag: (modifier_id, item_by_modifier_id) =>
    dispatch(actionRemoveItemByModifierToBag(modifier_id, item_by_modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(ChangeComboPanel)
