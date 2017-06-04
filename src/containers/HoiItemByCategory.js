import { connect } from "react-redux"
import ItemByCategory from "../components/ItemByCategory"
import { makeGetModifiersByItem, makeGetIsItemReadyToBuyHadBeenSelected } from "../selectors"

const mapStateToProps = (state, props) => {
  let { item: { id: item_id } } = props
  const isItemByCategoryHadBeenSelected = makeGetIsItemReadyToBuyHadBeenSelected(item_id)(state)
  return {
    modifiers: makeGetModifiersByItem(item_id)(state),
    isItemByCategoryHadBeenSelected
  }
}

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(ItemByCategory)
