import { connect } from "react-redux"
import ItemByModifierList from "../components/ItemByModifierList"
import { actionNormalizeItemsByModifier } from "../actions"
const mapStateToProps = ({ itemsByModifier }) => ({ itemsByModifier })

const mapActionToProps = dispatch => ({
  normalizeItemsByModifier: modifier_id => dispatch(actionNormalizeItemsByModifier(modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifierList)
