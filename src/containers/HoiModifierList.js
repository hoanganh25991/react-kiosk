import { connect } from "react-redux"
import ModifierList from "../components/ModifierList"
import { makeGetModifiersByItem } from "../selectors"

const mapStateToProps = state => {
  let { order: { item_id } } = state
  return {
    modifiers: makeGetModifiersByItem(item_id)(state)
  }
}
const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(ModifierList)
