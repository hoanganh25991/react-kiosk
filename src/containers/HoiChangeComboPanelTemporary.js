import { connect } from "react-redux"
import ChangeComboPanel from "../components/ChangeComboPanel"
import { actionAddSingleItemByModifierAsComboToBagTemporary } from "../actions"
import { makeGetSingleItemByModifierAsComboQuantityTemporary } from "../selectors"

const mapStateToProps = (state, props) => {
  let { item_by_modifier_id } = props
  const singleItemByModifierAsComboQuantityTemporary = makeGetSingleItemByModifierAsComboQuantityTemporary(
    item_by_modifier_id
  )(state)

  return { singleItemByModifierAsComboQuantityTemporary }
}

const mapActionToProps = dispatch => ({
  actionAddSingleItemByModifierAsComboToBagTemporary: (modifier_id, item_by_modifier_id, quantity) =>
    dispatch(actionAddSingleItemByModifierAsComboToBagTemporary(modifier_id, item_by_modifier_id, quantity))
})

export default connect(mapStateToProps, mapActionToProps)(ChangeComboPanel)
