import { connect } from "react-redux"
import ItemReadyToBuy from "../components/ItemReadyToBuy"
import { actionAddItemReadyToBuyToBag } from "../actions"

const mapStateToProps = () => ({})

const mapActionToProps = dispatch => ({
  addItemReadyToBuyToBag: item_id => dispatch(actionAddItemReadyToBuyToBag(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemReadyToBuy)
