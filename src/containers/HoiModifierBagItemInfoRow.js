import { connect } from "react-redux"
import ModifierBagItemInfoRow from "../components/ModifierBagItemInfoRow"
import { actionAddItemAsComboQuantity } from "../actions"

const mapStateToProps = null
const mapActionToProps = dispatch => ({
  actionAddItemAsComboQuantity: (item_id, quantity, lastItemIdUpdatedTimestamp) =>
    dispatch(actionAddItemAsComboQuantity(item_id, quantity, lastItemIdUpdatedTimestamp))
})

export default connect(mapStateToProps, mapActionToProps)(ModifierBagItemInfoRow)
