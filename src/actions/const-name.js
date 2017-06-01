/**
 * Customer action on order process
 * @type {string}
 */
export const CHOOSE_CATEGORY = "CHOOSE_CATEGORY"
export const ORDER_PROCESS_STEP_LOAD_ITEMS = "ORDER_PROCESS_STEP_LOAD_ITEMS"
export const CHOOSE_ITEM = "CHOOSE_ITEM"
export const ORDER_PROCESS_STEP_LOAD_MODIFIERS = "ORDER_PROCESS_STEP_LOAD_MODIFIERS"

// Pick up an item
export const ADD_TIME_TO_BAG = "ADD_TIME_TO_BAG"
export const CHOOSE_ITEM_OR_ADD_TO_BAG = "CHOOSE_ITEM_OR_ADD_TO_BAG"
export const ADD_ITEM_BY_MODIFIER_TO_BAG = "ADD_ITEM_BY_MODIFIER_TO_BAG"

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
