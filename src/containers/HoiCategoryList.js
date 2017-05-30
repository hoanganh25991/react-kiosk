import { connect } from "react-redux"
import CategoryList from "../components/CategoryList"

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps, null)(CategoryList)
