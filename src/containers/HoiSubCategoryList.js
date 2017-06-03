import { connect } from "react-redux"
import SubCategoryList from "../components/SubCategoryList"
import { getSubCategoriesByCategory } from "../selectors"

const mapStateToProps = state => {
  let { order: { category_id: orderCategoryId } } = state
  return {
    subCategories: getSubCategoriesByCategory(state),
    orderCategoryId
  }
}

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(SubCategoryList)
