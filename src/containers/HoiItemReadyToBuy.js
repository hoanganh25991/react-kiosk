import { connect } from "react-redux"
import ItemReadyToBuy from "../components/ItemReadyToBuy"
import { actionChooseItemOrAddToBag } from "../actions"

const mapStateToProps = () => ({})

const mapActionToProps = dispatch => ({
  clickOnItem: item_id => dispatch(actionChooseItemOrAddToBag(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemReadyToBuy)
