import { connect } from "react-redux"
import ItemByModifier from "../components/ItemByModifier"
import { actionAddItemByModifierToBag } from "../actions"

const mapStateToProps = () => {
  return {}
}

const mapActionToProps = dispatch => ({
  addItemByModifierToBag: xxx => dispatch(actionAddItemByModifierToBag(xxx))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifier)
