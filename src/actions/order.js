import * as c from "./const-name"
import moment from "moment"

export const actionUpdateLastOrderCategoryIdChangedTimestamp = timestamp => ({
  type: c.UPDATE_LAST_ORDER_CATEGORY_ID_CHANGED_TIMESTAMP,
  timestamp
})

export const actionOrderProcessStepLoadItems = () => ({ type: c.ORDER_PROCESS_STEP_LOAD_ITEMS })
//
//
//
//
// customer pick one category
export const actionChooseCategory = category_id => {
  return (dispatch, getState) => {
    dispatch({ type: c.THUNK_CHOOSE_CATEGORY })
    let { order: { category_id: currCategoryId } } = getState()
    let isCategoryIdChanged = currCategoryId != category_id
    if (isCategoryIdChanged) {
      let now = moment()
      // Please remeber to use number, format from moment date obj is string
      dispatch(actionUpdateLastOrderCategoryIdChangedTimestamp(+now.format("X")))
    }
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

export const actionAddItemReadyToBuyToBag = item_id => ({ type: c.ADD_ITEM_READY_TO_BUY_TO_BAG, item_id })
//
//
//
//
// click to add item by modifier to bag
// export const actionAddItemByModifierToBag = () => {
//   return (dispatch, getState) => {
//     dispatch({type: c.THUNK_ADD_ITEM_BY_MODIFIER_TO_BAG})
//
//
//   }
// }
export const actionAddItemByModifierToBag = (modifier_id, item_by_modifier_id) => ({
  type: c.ADD_ITEM_BY_MODIFIER_CHECKBOX_ROW_TO_BAG,
  modifier_id,
  item_by_modifier_id
})

export const actionAddItemByModifierXXXToBag = (modifier_id, item_by_modifier_id) => ({
  type: c.ADD_ITEM_BY_MODIFIER_TO_BAG,
  modifier_id,
  item_by_modifier_id
})

export const actionRemoveItemByModifierToBag = (modifier_id, item_by_modifier_id) => ({
  type: c.REMOVE_ITEM_BY_MODIFIER_TO_BAG,
  modifier_id,
  item_by_modifier_id
})
