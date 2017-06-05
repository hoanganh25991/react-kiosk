import { connect } from "react-redux"
import ItemByModifierCheckboxRow from "../components/ItemByModifierCheckboxRow"
import { actionAddItemByModifierToBagTemporary } from "../actions"
import { makeGetItemByModifierQuantityInBagTemporaryItemBeingEdited } from "../selectors"

const mapStateToProps = (state, props) => {
  let { modifier, item } = props
  const itemByModifierQuantityTemporary = makeGetItemByModifierQuantityInBagTemporaryItemBeingEdited(
    modifier.id,
    item.id
  )(state)
  return { itemByModifierQuantityTemporary }
}

const mapActionToProps = dispatch => ({
  actionAddItemByModifierToBagTemporary: (modifier_id, item_by_modifier_id, quantity) =>
    dispatch(actionAddItemByModifierToBagTemporary(modifier_id, item_by_modifier_id, quantity))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifierCheckboxRow)
