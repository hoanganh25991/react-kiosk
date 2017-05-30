import { connect } from "react-redux"
import Item from "../components/Item"
import { actionChooseItem } from "../actions"

const mapStateToProps = ({ order }) => {
  let { item_id: orderItemId } = order

  return {
    isSelected: item_id => item_id === orderItemId
  }
}
const mapActionToProps = dispatch => ({
  chooseItem: item_id => dispatch(actionChooseItem(item_id))
})

export default connect(mapStateToProps, mapActionToProps)(Item)
