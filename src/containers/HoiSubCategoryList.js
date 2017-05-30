import { connect } from "react-redux"
import SubCategoryList from "../components/SubCategoryList"
import { actionNormalizeSubCategoriesByCategory } from "../actions"

const mapStateToProps = ({ subCategoriesByCategory }) => ({ subCategoriesByCategory })

const mapActionToProps = dispatch => ({
  normalizeSubCategoriesByCategory: category_id => dispatch(actionNormalizeSubCategoriesByCategory(category_id))
})

export default connect(mapStateToProps, mapActionToProps)(SubCategoryList)
