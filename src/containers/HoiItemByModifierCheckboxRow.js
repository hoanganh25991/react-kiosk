import { connect } from "react-redux"
import ItemByModifierCheckboxRow from "../components/ItemByModifierCheckboxRow"
import { actionAddItemByModifierToBag } from "../actions"

const mapStateToProps = () => {
  return {}
}

const mapActionToProps = dispatch => ({
  addItemByModifierToBag: (modifier_id, item_by_modifier_id) =>
    dispatch(actionAddItemByModifierToBag(modifier_id, item_by_modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifierCheckboxRow)
