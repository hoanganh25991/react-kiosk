import { connect } from "react-redux"
import ItemByModifierCheckboxRow from "../components/ItemByModifierCheckboxRow"
import { actionAddItemByModifierToBagTemporary } from "../actions"
import { makeGetIsItemByModifierSelectedTemporary } from "../selectors"

const mapStateToProps = (state, props) => {
  let { order: { item_id: orderItemId } } = state
  let { modifier, item } = props
  const isItemByModifierSelectedTemporary = makeGetIsItemByModifierSelectedTemporary(orderItemId, modifier.id, item.id)(
    state
  )
  return { isItemByModifierSelectedTemporary }
}

const mapActionToProps = dispatch => ({
  actionAddItemByModifierToBagTemporary: (modifier_id, item_by_modifier_id) =>
    dispatch(actionAddItemByModifierToBagTemporary(modifier_id, item_by_modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifierCheckboxRow)
