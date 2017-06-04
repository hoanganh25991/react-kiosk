import { connect } from "react-redux"
import Modifier from "../components/Modifier"
import { actionAddItemByModifierToBag } from "../actions"
import { makeGetItemsByModifiers, makeGetShouldLoadSingleItemByModifierAsCombo } from "../selectors"

const mapStateToProps = (state, props) => {
  let { modifier: { id: modifier_id } } = props
  let items = makeGetItemsByModifiers(modifier_id)(state)
  const shouldLoadSingleItemByModifierAsItemCombo = makeGetShouldLoadSingleItemByModifierAsCombo(items)(state)
  return { items, shouldLoadSingleItemByModifierAsItemCombo }
}

const mapActionToProps = dispatch => ({
  addItemByModifierToBag: (modifier_id, item_id) => dispatch(actionAddItemByModifierToBag(modifier_id, item_id))
})

export default connect(mapStateToProps, mapActionToProps)(Modifier)
