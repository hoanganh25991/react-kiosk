import { connect } from "react-redux"
import OrderInfo from "../components/OrderInfo"
import { getOrderInfo } from "../selectors"

const getOrderTotal = orderInfo =>
  orderInfo.reduce((carry, bagItemParsed) => {
    let itemTotal = bagItemParsed.item_price * bagItemParsed.quantity
    carry += itemTotal
    return carry
  }, 0)

const mapStateToProps = state => {
  const orderInfo = getOrderInfo(state)
  const orderTotal = getOrderTotal(orderInfo)
  return {
    orderInfo,
    orderTotal
  }
}
const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(OrderInfo)
