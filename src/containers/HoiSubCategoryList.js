import { connect } from "react-redux"
import SubCategoryList from "../components/SubCategoryList"

const findSubCategories = (categories, category_id) => {
  let subCategory = categories.filter(category => category.main_category_id === category_id)

  return subCategory
}

const mapStateToProps = ({ categories, order }) => {
  let { category_id } = order
  let subCategories = findSubCategories(categories, category_id)
  console.log(subCategories)
  return {
    subCategories,
    order
  }
}

export default connect(mapStateToProps, null)(SubCategoryList)
