import { connect } from "react-redux"
import Item from "../components/Item"
import { actionChooseItemOrAddToBag } from "../actions"

const mapStateToProps = ({ order }) => {
  let { item_id: orderItemId } = order

  return {
    isSelected: item_id => item_id === orderItemId
  }
}

const mapActionToProps = dispatch => ({
  clickOnItem: item_id => dispatch(actionChooseItemOrAddToBag(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(Item)
