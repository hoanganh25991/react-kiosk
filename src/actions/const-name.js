// Customer action on order process
export const THUNK_CHOOSE_CATEGORY = "THUNK_CHOOSE_CATEGORY"
export const CHOOSE_CATEGORY = "CHOOSE_CATEGORY"
export const ORDER_PROCESS_STEP_LOAD_ITEMS = "ORDER_PROCESS_STEP_LOAD_ITEMS"
// Pick item
export const THUNK_CHOOSE_ITEM = "THUNK_CHOOSE_ITEM"
export const CHOOSE_ITEM = "CHOOSE_ITEM"
// Item has modifiers, load them out
export const ORDER_PROCESS_STEP_LOAD_MODIFIERS = "ORDER_PROCESS_STEP_LOAD_MODIFIERS"
// Pick up an item
export const ADD_ITEM_READY_TO_BUY_TO_BAG = "ADD_ITEM_READY_TO_BUY_TO_BAG"
export const ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG = "ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG"
export const ADD_ITEM_BY_MODIFIER_TO_BAG = "ADD_ITEM_BY_MODIFIER_TO_BAG"
// Auto select on load modifers from item
export const THUNK_AUTO_SELECT_ITEM_BY_MODIFIER_ON_LOAD = "THUNK_AUTO_SELECT_ITEM_BY_MODIFIER_ON_LOAD"
// Auto select, select on bag temporary
// Only when customer press [+add to order] > real add
export const OPEN_BAG_TEMPORARY = "OPEN_BAG_TEMPORARY"
export const ADD_ITEM_BY_MODIFIER_TO_BAG_TEMPORARY = "ADD_ITEM_BY_MODIFIER_TO_BAG_TEMPORARY"
export const ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG_TEMPORARY =
  "ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG_TEMPORARY"
// Move from temporay > real bag
export const ADD_BAG_TEMPORARY_ITEM_BEING_EDITED_TO_BAG = "ADD_BAG_TEMPORARY_ITEM_BEING_EDITED_TO_BAG"
// Clear it out
export const REMOVE_BAG_TEMPORARY_ITEM_BEING_EDITED = "REMOVE_BAG_TEMPORARY_ITEM_BEING_EDITED"
// Use in order info
export const ADD_ITEM_AS_COMBO_QUANTITY = "ADD_ITEM_AS_COMBO_QUANTITY"
// Alert
export const ALERT_MSG = "ALERT_MSG"
// Bag item
export const NORMAL_BAG_ITEM = "NORMAL_BAG_ITEM"
export const MODIFIER_BAG_ITEM = "MODIFIER_BAG_ITEM"
// Modifier
export const MULTI_SELECT = 1
export const SINGLE_SELECT = 0
export const MUST_HAVE_ONE = 1
// ItemByCategory by modifier TYPE
// Item as item ready to buy
export const DEFAULT_PRICE_LEVEL = "price1"
