import { connect } from "react-redux"
import ChangeComboPanel from "../components/ChangeComboPanel"
import { actionAddSingleItemByModifierAsComboToBag, actionRemoveSingleItemByModifierAsComboToBag } from "../actions"

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
  actionAddSingleItemByModifierAsComboToBag: (modifier_id, item_by_modifier_id) =>
    dispatch(actionAddSingleItemByModifierAsComboToBag(modifier_id, item_by_modifier_id)),
  actionRemoveSingleItemByModifierAsComboToBag: (modifier_id, item_by_modifier_id) =>
    dispatch(actionRemoveSingleItemByModifierAsComboToBag(modifier_id, item_by_modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(ChangeComboPanel)
