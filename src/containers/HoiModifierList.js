import { connect } from "react-redux"
import ModifierList from "../components/ModifierList"
import { actionNormalizeModifiersByItem } from "../actions"

const mapStateToProps = ({ modifiersByItem }) => ({ modifiersByItem })

const mapActionToProps = dispatch => ({
  normalizeModifiersByItem: item_id => dispatch(actionNormalizeModifiersByItem(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(ModifierList)
