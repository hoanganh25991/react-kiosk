import { connect } from "react-redux"
import ItemByModifierList from "../components/ItemByModifierList"
import { actionNormalizeItemsByModifier } from "../actions"
const mapStateToProps = ({ itemsByModifier, modifier_groups }) => {
  let byModifier = modifier_id => modifier_groups.filter(modifier => modifier.id === modifier_id)[0]
  return { itemsByModifier, byModifier }
}

const mapActionToProps = dispatch => ({
  normalizeItemsByModifier: modifier_id => dispatch(actionNormalizeItemsByModifier(modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifierList)
