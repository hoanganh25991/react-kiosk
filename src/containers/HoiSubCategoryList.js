import { connect } from "react-redux"
import SubCategoryList from "../components/SubCategoryList"
import moment from "moment"
import { actionNormalizeSubCategoriesByCategory } from "../actions"

const mapStateToProps = ({ subCategoriesByCategory, order }) => {
  let { category_id } = order
  let subCategories = subCategoriesByCategory[category_id]
  return {
    subCategories,
    timestamp: moment()
  }
}

const mapActionToProps = dispatch => ({
  normalizeSubCategoriesByCategory: category_id => dispatch(actionNormalizeSubCategoriesByCategory(category_id))
})

export default connect(mapStateToProps, mapActionToProps)(SubCategoryList)
