import { connect } from "react-redux"
import ItemList from "../components/ItemList"

import { actionNormalizeItemsByCategory } from "../actions"

const mapStateToProps = ({ itemsByCategory }) => {
  let getItemsByCategory = category_id => itemsByCategory[category_id]

  return {
    getItemsByCategory
  }
}

const mapActionToProps = dispatch => ({
  normalizeItemsByCategory: category_id => dispatch(actionNormalizeItemsByCategory(category_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemList)
