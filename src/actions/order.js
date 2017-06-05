import * as c from "./const-name"

export const actionOrderProcessStepLoadItems = () => ({ type: c.ORDER_PROCESS_STEP_LOAD_ITEMS })
//
//
//
//
// customer pick one category
export const actionChooseCategory = category_id => {
  return dispatch => {
    dispatch({ type: c.THUNK_CHOOSE_CATEGORY })
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
    dispatch({ type: c.THUNK_CHOOSE_ITEM })
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

export const actionOpenBagTemporary = () => ({ type: c.OPEN_BAG_TEMPORARY })

export const actionAddItemByModifierToBagTemporary = (modifier_id, item_by_modifier_id, quantity) => ({
  type: c.ADD_ITEM_BY_MODIFIER_TO_BAG_TEMPORARY,
  modifier_id,
  item_by_modifier_id,
  quantity
})

export const actionAutoSelectItemByModifierOnLoad = (modifier_id, item_by_modifier_id) => {
  return dispatch => {
    dispatch({ type: c.THUNK_AUTO_SELECT_ITEM_BY_MODIFIER_ON_LOAD })
    dispatch(actionOpenBagTemporary())
    let quantity = 1
    dispatch(actionAddItemByModifierToBagTemporary(modifier_id, item_by_modifier_id, quantity))
  }
}

export const actionAddSingleItemByModifierAsComboToBagTemporary = (modifier_id, item_by_modifier_id, quantity) => ({
  type: c.ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG_TEMPORARY,
  modifier_id,
  item_by_modifier_id,
  quantity
})

export const actionAddBagTemporaryItemToBag = () => ({ type: c.ADD_BAG_TEMPORARY_ITEM_BEING_EDITED_TO_BAG })

export const actionAddBagTemporaryItemToBagAndMoveToLoadItems = () => {
  return dispatch => {
    dispatch(actionAddBagTemporaryItemToBag())
    dispatch(actionOrderProcessStepLoadItems())
  }
}

export const actionRemoveBagTemporaryItemBeingEdited = () => ({ type: c.REMOVE_BAG_TEMPORARY_ITEM_BEING_EDITED })

export const actionRemoveBagTemporaryItemBeingEditedAndMoveToLoadItems = () => {
  return dispatch => {
    dispatch(actionRemoveBagTemporaryItemBeingEdited())
    dispatch(actionOrderProcessStepLoadItems())
  }
}

export const actionAddItemAsComboQuantity = (item_id, quantity, lastItemIdUpdatedTimestamp) => ({
  type: c.ADD_ITEM_AS_COMBO_QUANTITY,
  item_id,
  quantity,
  lastItemIdUpdatedTimestamp
})
