import { connect } from "react-redux"
import Category from "../components/Category"

import { actionChooseCategory } from "../actions"

const mapActionToProps = dispatch => ({
  chooseCategory: categoryId => dispatch(actionChooseCategory(categoryId))
})

export default connect(null, mapActionToProps)(Category)
