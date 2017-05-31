import { connect } from "react-redux"
import ModifierList from "../components/ModifierList"
import { actionNormalizeModifiersByItem } from "../actions"

const mapStateToProps = ({ modifiersByItem }) => {
  let getModifiersByItem = item_id => modifiersByItem[item_id]

  return {
    getModifiersByItem
  }
}

const mapActionToProps = dispatch => ({
  normalizeModifiersByItem: item_id => dispatch(actionNormalizeModifiersByItem(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(ModifierList)
