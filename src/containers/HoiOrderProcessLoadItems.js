import { connect } from "react-redux"
import OrderProcessLoadItems from "../components/OrderProcessLoadItems"

const mapStateToProps = ({ order }) => ({
  order
})

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(OrderProcessLoadItems)
