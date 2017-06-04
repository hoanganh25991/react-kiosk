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
  return dispatch => {
    dispatch({ type: c.THUNK_CHOOSE_CATEGORY })
    let now = moment()
    dispatch(actionUpdateLastOrderCategoryIdChangedTimestamp(+now.format("X")))
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

export const actionAddItemReadyToBuyToBag = (item_id, quantity) => ({
  type: c.ADD_ITEM_READY_TO_BUY_TO_BAG,
  item_id,
  quantity
})
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
  type: c.ADD_ITEM_BY_MODIFIER_TO_BAG,
  modifier_id,
  item_by_modifier_id
})

export const actionOpenBagTemporary = () => ({ type: c.OPEN_BAG_TEMPORARY })

export const actionAddItemByModifierToBagTemporary = (modifier_id, item_by_modifier_id) => ({
  type: c.ADD_ITEM_BY_MODIFIER_TO_BAG_TEMPORARY,
  modifier_id,
  item_by_modifier_id
})

export const actionAutoSelectItemByModifierOnLoad = (modifier_id, item_by_modifier_id) => {
  return dispatch => {
    dispatch({ type: c.THUNK_AUTO_SELECT_ITEM_BY_MODIFIER_ON_LOAD })
    dispatch(actionOpenBagTemporary())
    dispatch(actionAddItemByModifierToBagTemporary(modifier_id, item_by_modifier_id))
  }
}

export const actionAddSingleItemByModifierAsComboToBag = (modifier_id, item_by_modifier_id, quantity) => ({
  type: c.ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG,
  modifier_id,
  item_by_modifier_id,
  quantity
})

export const actionAddSingleItemByModifierAsComboToBagTemporary = (modifier_id, item_by_modifier_id, quantity) => ({
  type: c.ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG_TEMPORARY,
  modifier_id,
  item_by_modifier_id,
  quantity
})

export const actionAddBagTemporaryItemToBag = () => ({ type: c.ADD_BAG_TEMPORARY_ITEM_TO_BAG })

export const actionAddBagTemporaryItemToBagAndCloseLoadModifiers = () => {
  return dispatch => {
    dispatch(actionAddBagTemporaryItemToBag())
    dispatch(actionOrderProcessStepLoadItems())
  }
}
