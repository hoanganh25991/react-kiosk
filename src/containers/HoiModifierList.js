import { connect } from "react-redux"
import ModifierList from "../components/ModifierList"

const mapStateToProps = ({ modifiersByItem }) => ({ modifiersByItem })

const mapActionToProps = null

export default connect(mapStateToProps, mapActionToProps)(ModifierList)
