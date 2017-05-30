import { connect } from "react-redux"
import { actionLoadItemsByCategory } from "../actions"
import ItemList from "../components/ItemList"

const mapActionToProps = dispatch => ({
  loadItemsByCategory: categoryId => dispatch(actionLoadItemsByCategory(categoryId))
})

export default connect(null, mapActionToProps)(ItemList)
