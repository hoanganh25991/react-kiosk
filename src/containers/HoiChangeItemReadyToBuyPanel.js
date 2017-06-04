import { connect } from "react-redux"
import ChangeItemReadyToBuyPanel from "../components/ChangeItemReadyToBuyPanel"
import { actionAddItemReadyToBuyToBag } from "../actions"

const mapStateToProps = null
const mapActionToProps = dispatch => ({
  addItemReadyToBuyToBag: item_id => dispatch(actionAddItemReadyToBuyToBag(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(ChangeItemReadyToBuyPanel)
