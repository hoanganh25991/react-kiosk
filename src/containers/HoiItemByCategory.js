import { connect } from "react-redux"
import ItemByCategory from "../components/ItemByCategory"
import { makeGetModifiersByItem } from "../selectors"

const mapStateToProps = (state, props) => {
  let { item: { id: item_id } } = props
  return {
    modifiers: makeGetModifiersByItem(item_id)(state)
  }
}

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(ItemByCategory)
