import { connect } from "react-redux"
import ChangeComboPanelTemporary from "../components/ChangeComboPanelTemporary"
import { actionAddSingleItemByModifierAsComboToBag } from "../actions"
import { makeGetSingleItemByModifierAsComboQuantity } from "../selectors"

const mapStateToProps = (state, props) => {
  let { item_by_modifier_id } = props
  const singleItemByModifierAsComboQuantity = makeGetSingleItemByModifierAsComboQuantity(item_by_modifier_id)(state)

  return { singleItemByModifierAsComboQuantity }
}

const mapActionToProps = dispatch => ({
  actionAddSingleItemByModifierAsComboToBag: (modifier_id, item_by_modifier_id, quantity) =>
    dispatch(actionAddSingleItemByModifierAsComboToBag(modifier_id, item_by_modifier_id, quantity))
})

export default connect(mapStateToProps, mapActionToProps)(ChangeComboPanelTemporary)
