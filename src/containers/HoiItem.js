import { connect } from "react-redux"
import Item from "../components/Item"
import { actionChooseItem } from "../actions"

const mapStateToProps = null
const mapActionToProps = dispatch => ({
  chooseItem: item_id => dispatch(actionChooseItem(item_id))
})

export default connect(null, mapActionToProps)(Item)
