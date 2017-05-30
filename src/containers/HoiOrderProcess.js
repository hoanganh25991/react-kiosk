import { connect } from "react-redux"
import OrderProcess from "../components/OrderProcess"

const mapStateToProps = ({ order }) => ({ order })

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(OrderProcess)
