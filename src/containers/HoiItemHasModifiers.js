import { connect } from "react-redux"
import ItemHasModifiers from "../components/ItemHasModifiers"
import { actionChooseItem } from "../actions"

const mapStateToProps = () => ({})

const mapActionToProps = dispatch => ({
  chooseItem: item_id => dispatch(actionChooseItem(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemHasModifiers)
