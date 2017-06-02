import { connect } from "react-redux"
import ItemHasModifiers from "../components/ItemHasModifiers"
import { actionChooseItemOrAddToBag } from "../actions"

const mapStateToProps = () => ({})

const mapActionToProps = dispatch => ({
  clickOnItem: item_id => dispatch(actionChooseItemOrAddToBag(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemHasModifiers)
