import { connect } from "react-redux"
import ItemByModifierCheckboxRow from "../components/ItemByModifierCheckboxRow"
import { actionAddItemByModifierToBagTemporary } from "../actions"
import { makeGetIsItemByModifierSelectedInBagTemporaryItemBeingEdited } from "../selectors"

const mapStateToProps = (state, props) => {
  let { modifier, item } = props
  const isItemByModifierSelectedTemporary = makeGetIsItemByModifierSelectedInBagTemporaryItemBeingEdited(
    modifier.id,
    item.id
  )(state)
  return { isItemByModifierSelectedTemporary }
}

const mapActionToProps = dispatch => ({
  actionAddItemByModifierToBagTemporary: (modifier_id, item_by_modifier_id, quantity) =>
    dispatch(actionAddItemByModifierToBagTemporary(modifier_id, item_by_modifier_id, quantity))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifierCheckboxRow)
