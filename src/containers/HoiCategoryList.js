import { connect } from "react-redux"
import CategoryList from "../components/CategoryList"

const mapStateToProps = ({ categories }) => {
  let categoriesHasNoParent = categories.filter(catetory => catetory.main_category_id === null)

  return {
    categories: categoriesHasNoParent
  }
}

export default connect(mapStateToProps, null)(CategoryList)
