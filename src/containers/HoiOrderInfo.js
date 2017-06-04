import { connect } from "react-redux"
import OrderInfo from "../components/OrderInfo"
import { getOrderInfo } from "../selectors"

const mapStateToProps = state => {
  const orderInfo = getOrderInfo(state)
  return {
    orderInfo
  }
}
const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(OrderInfo)
