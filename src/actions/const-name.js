/**
 * Customer action on order process
 * @type {string}
 */
export const THUNK_CHOOSE_CATEGORY = "THUNK_CHOOSE_CATEGORY"
export const CHOOSE_CATEGORY = "CHOOSE_CATEGORY"
export const UPDATE_LAST_ORDER_CATEGORY_ID_CHANGED_TIMESTAMP = "UPDATE_LAST_ORDER_CATEGORY_ID_CHANGED_TIMESTAMP"
export const ORDER_PROCESS_STEP_LOAD_ITEMS = "ORDER_PROCESS_STEP_LOAD_ITEMS"
export const CHOOSE_ITEM = "CHOOSE_ITEM"
export const ORDER_PROCESS_STEP_LOAD_MODIFIERS = "ORDER_PROCESS_STEP_LOAD_MODIFIERS"

// Pick up an item
export const ADD_ITEM_READY_TO_BUY_TO_BAG = "ADD_ITEM_READY_TO_BUY_TO_BAG"
export const ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG = "ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG"
export const ADD_ITEM_BY_MODIFIER_TO_BAG = "ADD_ITEM_BY_MODIFIER_TO_BAG"
export const THUNK_AUTO_SELECT_ITEM_BY_MODIFIER_ON_LOAD = "THUNK_AUTO_SELECT_ITEM_BY_MODIFIER_ON_LOAD"
export const OPEN_BAG_TEMPORARY = "OPEN_BAG_TEMPORARY"
export const ADD_ITEM_BY_MODIFIER_TO_BAG_TEMPORARY = "ADD_ITEM_BY_MODIFIER_TO_BAG_TEMPORARY"
export const ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG_TEMPORARY =
  "ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG_TEMPORARY"
export const ADD_BAG_TEMPORARY_ITEM_BEING_EDITED_TO_BAG = "ADD_BAG_TEMPORARY_ITEM_BEING_EDITED_TO_BAG"
export const REMOVE_BAG_TEMPORARY_ITEM_BEING_EDITED = "REMOVE_BAG_TEMPORARY_ITEM_BEING_EDITED"

export const ADD_NEW_TO_ORDER_BAG = "ADD_NEW_TO_ORDER_BAG"
export const UPDATE_ORDER_BAG = "UPDATE_ORDER_BAG"

/**
 * Normalize
 */
export const NORMALIZE_SUB_CATEGORIES_BY_CATEGORY = "NORMALIZE_SUB_CATEGORIES_BY_CATEGORY"
export const NORMALIZE_ITEMS_BY_CATEGORY = "NORMALIZE_ITEMS_BY_CATEGORY"
export const NORMALIZE_MODIFIERS_BY_ITEM = "NORMALIZE_MODIFIERS_BY_ITEM"
export const NORMALIZE_ITEMS_BY_MODIFIER = "NORMALIZE_ITEMS_BY_MODIFIER"

/**
 * Alert
 */
export const ALERT_MSG = "ALERT_MSG"

/**
 * Bag item
 */
// Type
export const NORMAL_BAG_ITEM = "NORMAL_BAG_ITEM"
export const MODIFIER_BAG_ITEM = "MODIFIER_BAG_ITEM"

/**
 * Modifier
 */
export const MULTI_SELECT = 1
export const SINGLE_SELECT = 0
export const MUST_HAVE_ONE = 1

/**
 * ItemByCategory by modifier TYPE
 */
export const ITEM_BY_MODIFIER = "ITEM_BY_MODIFIER"

/**
 * Item as item ready to buy
 */
export const DEFAULT_PRICE_LEVEL = "price1"
