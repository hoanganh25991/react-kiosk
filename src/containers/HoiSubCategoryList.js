import { connect } from "react-redux"
import SubCategoryList from "../components/SubCategoryList"
import { getSubCategoriesByCategory } from "../selectors"

const mapStateToProps = state => {
  return {
    subCategories: getSubCategoriesByCategory(state)
  }
}

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(SubCategoryList)
