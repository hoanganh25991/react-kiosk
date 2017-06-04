import { connect } from "react-redux"
import SubCategoryList from "../components/SubCategoryList"
import { getSubCategoriesByCategory, makeGetCategory } from "../selectors"

const mapStateToProps = state => {
  let { order: { category_id: orderCategoryId } } = state
  return {
    subCategories: getSubCategoriesByCategory(state),
    orderCategory: makeGetCategory(orderCategoryId)(state)
  }
}

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(SubCategoryList)
