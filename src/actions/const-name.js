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
export const ADD_TIME_TO_BAG = "ADD_TIME_TO_BAG"
export const ADD_ITEM_BY_MODIFIER_TO_BAG = "ADD_ITEM_BY_MODIFIER_TO_BAG"
export const REMOVE_ITEM_BY_MODIFIER_TO_BAG = "REMOVE_ITEM_BY_MODIFIER_TO_BAG"
export const ADD_ITEM_BY_MODIFIER_CHECKBOX_ROW_TO_BAG = "ADD_ITEM_BY_MODIFIER_CHECKBOX_ROW_TO_BAG"

export const ADD_NEW_TO_ORDER_BAG = "ADD_NEW_TO_ORDER_BAG"
export const UPDATE_ORDER_BAG = "UPDATE_ORDER_BAG"

/**
 * Load normalize data as: modifiers, items, categories 
 * @type {string}
 */
export const LOAD_MODIFIERS_BY_ITEM = "LOAD_MODIFIERS_BY_ITEM"

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
 * Item by modifier TYPE
 */
export const ITEM_BY_MODIFIER = "ITEM_BY_MODIFIER"
export const ITEM_BY_MODIFIER_CHECKBOX_ROW = "ITEM_BY_MODIFIER_CHECKBOX_ROW"
