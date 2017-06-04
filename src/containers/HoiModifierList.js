import { connect } from "react-redux"
import ModifierList from "../components/ModifierList"
import { makeGetModifiersByItem } from "../selectors"
import { actionAddBagTemporaryItemToBagAndCloseLoadModifiers } from "../actions"

const mapStateToProps = state => {
  let { order: { item_id } } = state
  return {
    modifiers: makeGetModifiersByItem(item_id)(state)
  }
}
const mapActionToProps = dispatch => ({
  actionAddBagTemporaryItemToBagAndCloseLoadModifiers: () =>
    dispatch(actionAddBagTemporaryItemToBagAndCloseLoadModifiers())
})

export default connect(mapStateToProps, mapActionToProps)(ModifierList)
