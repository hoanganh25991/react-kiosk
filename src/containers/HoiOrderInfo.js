import { connect } from "react-redux"
import OrderInfo from "../components/OrderInfo"

const mapStateToProps = ({ order: { bag } }) => ({ bag })
const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(OrderInfo)
