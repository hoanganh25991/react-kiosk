import { connect } from "react-redux"
import SubCategoryList from "../components/SubCategoryList"
import { actionNormalizeSubCategoriesByCategory } from "../actions"

const mapStateToProps = ({ subCategoriesByCategory }) => {
  const getSubCategoriesByCategory = category_id => subCategoriesByCategory[category_id]

  return {
    getSubCategoriesByCategory
  }
}

const mapActionToProps = dispatch => ({
  normalizeSubCategoriesByCategory: category_id => dispatch(actionNormalizeSubCategoriesByCategory(category_id))
})

export default connect(mapStateToProps, mapActionToProps)(SubCategoryList)
