import { connect } from "react-redux"
import Category from "../components/Category"

import { actionChooseCategory } from "../actions"

const mapStateToProps = ({ order }) => {
  let { category_id: orderCategoryId } = order

  return {
    isSelected: category_id => category_id === orderCategoryId
  }
}

const mapActionToProps = dispatch => ({
  chooseCategory: categoryId => dispatch(actionChooseCategory(categoryId))
})

export default connect(mapStateToProps, mapActionToProps)(Category)
