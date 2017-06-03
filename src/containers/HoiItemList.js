import { connect } from "react-redux"
import ItemList from "../components/ItemList"

import { getItemsByCategory } from "../selectors"

const makeMapStateToProps = () => {
  const mapStateToProps = (state, props) => {
    return {
      items: getItemsByCategory(state, props)
    }
  }

  return mapStateToProps
}

const mapActionToProps = dispatch => ({})

export default connect(makeMapStateToProps, mapActionToProps)(ItemList)
