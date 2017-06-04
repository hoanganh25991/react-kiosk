import { connect } from "react-redux"
import ChangeComboPanel from "../components/ChangeComboPanel"
import { actionAddSingleItemByModifierAsComboToBagTemporary } from "../actions"
import { makeGetSingleItemByModifierAsComboQuantity } from "../selectors"

const mapStateToProps = (state, props) => {
  let { item_by_modifier_id } = props
  const singleItemByModifierAsComboQuantity = makeGetSingleItemByModifierAsComboQuantity(item_by_modifier_id)(state)

  return { singleItemByModifierAsComboQuantity }
}

const mapActionToProps = dispatch => ({
  actionAddSingleItemByModifierAsComboToBagTemporary: (modifier_id, item_by_modifier_id, quantity) =>
    dispatch(actionAddSingleItemByModifierAsComboToBagTemporary(modifier_id, item_by_modifier_id, quantity))
})

export default connect(mapStateToProps, mapActionToProps)(ChangeComboPanel)
