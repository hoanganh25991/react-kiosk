import { connect } from "react-redux"
import CategoryItem from "../components/CategoryItem"

import { actionChooseCategory } from "../actions"

const mapActionToProps = dispatch => ({
  chooseCategory: category_id => dispatch(actionChooseCategory(category_id))
})

export default connect(null, null)(CategoryItem)
