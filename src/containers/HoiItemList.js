import { connect } from "react-redux"
import ItemList from "../components/ItemList"

import { actionNormalizeItemsByCategory } from "../actions"

const mapStateToProps = ({ itemsByCategory }) => ({ itemsByCategory })

const mapActionToProps = dispatch => ({
  normalizeItemsByCategory: category_id => dispatch(actionNormalizeItemsByCategory(category_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemList)
