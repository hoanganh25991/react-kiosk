import { connect } from "react-redux"
import AddItemBtn from "../components/AddItemBtn"
import { actionChooseItemOrAddToBag } from "../actions"

const mapStateToProps = null

const mapActionToProps = dispatch => ({
  clickOnItem: item_id => dispatch(actionChooseItemOrAddToBag(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(AddItemBtn)
