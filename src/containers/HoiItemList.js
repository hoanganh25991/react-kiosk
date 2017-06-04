import { connect } from "react-redux"
import ItemList from "../components/ItemList"

import { makeGetItemsByCategory } from "../selectors"

const makeMapStateToProps = () => {
  const mapStateToProps = (state, props) => {
    let { category_id } = props
    return {
      items: makeGetItemsByCategory(category_id)(state)
    }
  }

  return mapStateToProps
}

const mapActionToProps = dispatch => ({})

export default connect(makeMapStateToProps, mapActionToProps)(ItemList)
