import { connect } from "react-redux"
import SubCategoryList from "../components/SubCategoryList"
import { makeGetSubCategoriesByCategory, makeGetCategory } from "../selectors"

const mapStateToProps = state => {
  let { order: { category_id: orderCategoryId } } = state
  return {
    subCategories: makeGetSubCategoriesByCategory(orderCategoryId)(state),
    orderCategory: makeGetCategory(orderCategoryId)(state)
  }
}

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(SubCategoryList)
