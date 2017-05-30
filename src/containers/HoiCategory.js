import { connect } from "react-redux"
import Category from "../components/Category"

import { actionChooseCategory } from "../actions"

const mapActionToProps = dispatch => ({
  chooseCategory: category_id => dispatch(actionChooseCategory(category_id))
})

export default connect(null, mapActionToProps)(Category)
