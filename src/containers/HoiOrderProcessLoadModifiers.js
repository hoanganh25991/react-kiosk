import { connect } from "react-redux"
import OrderProcessLoadModifiers from "../components/OrderProcessLoadModifiers"

const mapStateToProps = ({ order }) => ({
  order
})

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(OrderProcessLoadModifiers)
