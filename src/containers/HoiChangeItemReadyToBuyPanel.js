import { connect } from "react-redux"
import ChangeItemReadyToBuyPanel from "../components/ChangeItemReadyToBuyPanel"
import { actionAddItemReadyToBuyToBag } from "../actions"
import { makeGetBagItemQuantity } from "../selectors"

const mapStateToProps = (state, props) => {
  let { item_id } = props
  let itemReadyToBuyQuantity = makeGetBagItemQuantity(item_id)(state)
  return { itemReadyToBuyQuantity }
}
const mapActionToProps = dispatch => ({
  actionAddItemReadyToBuyToBag: (item_id, quantity) => dispatch(actionAddItemReadyToBuyToBag(item_id, quantity))
})

export default connect(mapStateToProps, mapActionToProps)(ChangeItemReadyToBuyPanel)
