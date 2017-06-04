import { connect } from "react-redux"
import NormalBagItemInfoRow from "../components/NormalBagItemInfoRow"
import { actionAddItemReadyToBuyToBag } from "../actions"

const mapStateToProps = null
const mapActionToProps = dispatch => ({
  actionAddItemReadyToBuyToBag: (item_id, quantity) => dispatch(actionAddItemReadyToBuyToBag(item_id, quantity))
})

export default connect(mapStateToProps, mapActionToProps)(NormalBagItemInfoRow)
