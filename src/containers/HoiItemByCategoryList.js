import { connect } from "react-redux"
import ItemByCategoryList from "../components/ItemByCategoryList"

import { makeGetItemsByCategory } from "../selectors"

const makeMapStateToProps = () => {
  const mapStateToProps = (state, props) => {
    let { category: { id: category_id } } = props
    return {
      items: makeGetItemsByCategory(category_id)(state)
    }
  }

  return mapStateToProps
}

const mapActionToProps = dispatch => ({})

export default connect(makeMapStateToProps, mapActionToProps)(ItemByCategoryList)
