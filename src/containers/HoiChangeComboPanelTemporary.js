import { connect } from "react-redux"
import ChangeComboPanelTemporary from "../components/ChangeComboPanelTemporary"
import { actionAddSingleItemByModifierAsComboToBagTemporary } from "../actions"
import { getSingleItemByModifierAsComboQuantityTemporaryBeingEdited } from "../selectors"

const mapStateToProps = state => {
  const singleItemByModifierAsComboQuantityTemporary = getSingleItemByModifierAsComboQuantityTemporaryBeingEdited(state)
  return { singleItemByModifierAsComboQuantityTemporary }
}

const mapActionToProps = dispatch => ({
  actionAddSingleItemByModifierAsComboToBagTemporary: (modifier_id, item_by_modifier_id, quantity) =>
    dispatch(actionAddSingleItemByModifierAsComboToBagTemporary(modifier_id, item_by_modifier_id, quantity))
})

export default connect(mapStateToProps, mapActionToProps)(ChangeComboPanelTemporary)
