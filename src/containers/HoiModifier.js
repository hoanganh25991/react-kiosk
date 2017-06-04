import { connect } from "react-redux"
import Modifier from "../components/Modifier"
import { actionAddItemByModifierToBag } from "../actions"
import { makeGetItemsByModifiers } from "../selectors"

const mapStateToProps = (state, props) => {
  let { modifier: { id: modifier_id } } = props
  return { items: makeGetItemsByModifiers(modifier_id)(state) }
}

const mapActionToProps = dispatch => ({
  addItemByModifierToBag: (modifier_id, item_id) => dispatch(actionAddItemByModifierToBag(modifier_id, item_id))
})

export default connect(mapStateToProps, mapActionToProps)(Modifier)
