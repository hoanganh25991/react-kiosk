import * as c from "./const-name"
import * as n from "./normalize"
import { actionAlert } from "./alert"
/**
 * Hanlde normalize right at someone ask for 'modifiers' by 'items'
 * @param item_id
 */
export const actionLoadModifiersByItem = item_id => {
  return (dispatch, getState) => {
    dispatch({ type: c.LOAD_MODIFIERS_BY_ITEM })
    dispatch(n.actionNormalizeModifiersByItem(item_id))
    let { modifiersByItem } = getState()
    return modifiersByItem[item_id]
  }
}

export const actionOrderProcessStepLoadItems = () => ({ type: c.ORDER_PROCESS_STEP_LOAD_ITEMS })
//
//
//
//
// customer pick one category
export const actionChooseCategory = category_id => {
  return dispatch => {
    dispatch({ type: c.CHOOSE_CATEGORY, category_id })
    dispatch(actionOrderProcessStepLoadItems())
  }
}

export const actionOrderProcessLoadModifiers = () => ({ type: c.ORDER_PROCESS_STEP_LOAD_MODIFIERS })
//
//
//
//
// customer pick one item
export const actionChooseItem = item_id => {
  return dispatch => {
    dispatch({ type: c.CHOOSE_ITEM, item_id })
    dispatch(actionOrderProcessLoadModifiers())
  }
}

export const actionAddItemToBag = item_id => ({ type: c.ADD_TIME_TO_BAG, item_id })
//
//
//
//
// click on an item
export const actionChooseItemOrAddToBag = item_id => {
  return dispatch => {
    dispatch({ type: c.CHOOSE_ITEM_OR_ADD_TO_BAG })
    let modifiers = dispatch(actionLoadModifiersByItem(item_id))
    // Decide proper action to handle
    let action
    if (modifiers === undefined) {
      // Normalize for this item_id not yet set up
      // Ok wait
      let msg = "Please waiting..."
      action = () => actionAlert(msg)
    } else if (modifiers && modifiers.length > 0) {
      // Item has modifiers
      // Click on it means load modifiers
      action = () => actionChooseItem(item_id)
    } else if (modifiers && modifiers.length === 0) {
      // Item has no modifiers
      // Click on it means add to bag
      action = () => actionAddItemToBag(item_id)
    } else {
      let msg = "Sorry. Unknown case!"
      action = () => actionAlert(msg)
    }
    dispatch(action())
  }
}
