import { connect } from "react-redux"
import ItemByModifierList from "../components/ItemByModifierList"
import { actionNormalizeItemsByModifier } from "../actions"

const msgForMandatory = "Mandatory item."
const msgForNoMandatory = "Optional item."
const msgForMultiSelect = "Can pick multiple."
const msgForNoMultiSelect = "Only pick one."

const getInstructionMsg = (mandatory, multi_select) => {
  let msg
  switch (true) {
    case mandatory === 1 && multi_select === 1: {
      msg = `${msgForMandatory} ${msgForMultiSelect}`
      break
    }
    case mandatory === 1 && multi_select === 0: {
      msg = `${msgForMandatory} ${msgForNoMultiSelect}`
      break
    }
    case mandatory === 0 && multi_select === 0: {
      msg = `${msgForNoMandatory} ${msgForNoMandatory}`
      break
    }
    case mandatory === 0 && multi_select === 1: {
      msg = `${msgForNoMandatory} ${msgForMultiSelect}`
      break
    }
    default:
      msg = `Sorry. Unknown case for mandatory: ${mandatory}, multi_select: ${multi_select}`
      break
  }

  return msg
}

const mapStateToProps = ({ itemsByModifier, modifier_groups }) => {
  let getModifier = modifier_id => modifier_groups.filter(modifier => modifier.id === modifier_id)[0]
  let getItemsByModifier = modifier_id => itemsByModifier[modifier_id]
  return { getItemsByModifier, getModifier, getInstructionMsg }
}

const mapActionToProps = dispatch => ({
  normalizeItemsByModifier: modifier_id => dispatch(actionNormalizeItemsByModifier(modifier_id))
})

export default connect(mapStateToProps, mapActionToProps)(ItemByModifierList)
