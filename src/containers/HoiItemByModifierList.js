import { connect } from "react-redux"
import ItemByModifierList from "../components/ItemByModifierList"
import { actionNormalizeItemsByModifier } from "../actions"

const mapStateToProps = ({ itemsByModifier, modifier_groups, order, items }) => {
  let getModifier = modifier_id => modifier_groups.filter(modifier => modifier.id === modifier_id)[0]
  let getItemsByModifier = modifier_id => itemsByModifier[modifier_id]
  let { item_id } = order
  let itemParentOfModifier = items.filter(item => item.id === item_id)[0]
  return { getItemsByModifier, getModifier, itemParentOfModifier }
}

const mapActionToProps = dispatch => ({
  normalizeItemsByModifier: modifier_id => dispatch(actionNormalizeItemsByModifier(modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifierList)
