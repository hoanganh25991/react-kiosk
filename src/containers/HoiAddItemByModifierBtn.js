import { connect } from "react-redux"
import HoiAddItemByModifierBtn from "../components/AddItemByModifierBtn"
import { actionAddItemByModifierToBag } from "../actions"

const mapStateToProps = null
const mapActionToProps = dispatch => ({
  addItemByModifierToBag: (modifier_id, item_by_modifier_id) =>
    dispatch(actionAddItemByModifierToBag(modifier_id, item_by_modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(HoiAddItemByModifierBtn)
