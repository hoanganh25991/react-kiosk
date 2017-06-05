import { connect } from "react-redux"
import Modifier from "../components/Modifier"
import { actionAutoSelectItemByModifierOnLoad } from "../actions"
import { makeGetItemsByModifiers, shouldLoadSingleItemByModifierAsCombo } from "../selectors"

const mapStateToProps = (state, props) => {
  let { modifier: { id: modifier_id } } = props
  let items = makeGetItemsByModifiers(modifier_id)(state)
  const shouldLoadSingleItemByModifierAsItemCombo = shouldLoadSingleItemByModifierAsCombo(items)
  return { items, shouldLoadSingleItemByModifierAsItemCombo }
}

const mapActionToProps = dispatch => ({
  actionAutoSelectItemByModifierOnLoad: (modifier_id, item_id) =>
    dispatch(actionAutoSelectItemByModifierOnLoad(modifier_id, item_id))
})

export default connect(mapStateToProps, mapActionToProps)(Modifier)
