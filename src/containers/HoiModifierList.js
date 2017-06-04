import { connect } from "react-redux"
import ModifierList from "../components/ModifierList"
import { makeGetModifiersByItem } from "../selectors"
import {
  actionAddBagTemporaryItemToBagAndMoveToLoadItems,
  actionRemoveBagTemporaryItemBeingEditedAndMoveToLoadItems
} from "../actions"

const mapStateToProps = state => {
  let { order: { item_id } } = state
  return {
    modifiers: makeGetModifiersByItem(item_id)(state)
  }
}
const mapActionToProps = dispatch => ({
  actionAddBagTemporaryItemToBagAndCloseLoadModifiers: () =>
    dispatch(actionAddBagTemporaryItemToBagAndMoveToLoadItems()),
  actionRemoveBagTemporaryItemBeingEditedAndMoveToLoadItems: () =>
    dispatch(actionRemoveBagTemporaryItemBeingEditedAndMoveToLoadItems())
})

export default connect(mapStateToProps, mapActionToProps)(ModifierList)
