import { connect } from "react-redux"
import ItemReadyToBuy from "../components/ItemReadyToBuy"
import { makeGetIsItemReadyToBuyHadBeenSelected } from "../selectors"

const mapStateToProps = (state, props) => {
  let { item: { id: item_id } } = props
  let isItemReadyToBuyHadBeenSelected = makeGetIsItemReadyToBuyHadBeenSelected(item_id)(state)

  return { isItemReadyToBuyHadBeenSelected }
}

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(ItemReadyToBuy)
