import { connect } from "react-redux"
import ChangeItemReadyToBuyPanel from "../components/ChangeItemReadyToBuyPanel"
import { actionAddItemReadyToBuyToBag } from "../actions"

const mapStateToProps = null
const mapActionToProps = dispatch => ({
  actionAddItemReadyToBuyToBag: (item_id, quantity) => dispatch(actionAddItemReadyToBuyToBag(item_id, quantity))
})

export default connect(mapStateToProps, mapActionToProps)(ChangeItemReadyToBuyPanel)
