import fakeData from "./fake-data"
import * as c from "../actions/const-name"
import order from "./order"

const initState = {
  ...fakeData,
  order: {
    category_id: -1,
    lastCategoryIdUpdatedTimestamp: null,
    item_id: null,
    lastItemIdUpdatedTimestamp: null,
    step: null,
    bag: [],
    bagTemporary: []
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case c.CHOOSE_CATEGORY:
    case c.ORDER_PROCESS_STEP_LOAD_ITEMS:
    case c.CHOOSE_ITEM:
    case c.ADD_ITEM_READY_TO_BUY_TO_BAG:
    case c.ORDER_PROCESS_STEP_LOAD_MODIFIERS:
    case c.OPEN_BAG_TEMPORARY:
    case c.ADD_ITEM_BY_MODIFIER_TO_BAG_TEMPORARY:
    case c.ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG_TEMPORARY:
    case c.ADD_BAG_TEMPORARY_ITEM_BEING_EDITED_TO_BAG:
    case c.REMOVE_BAG_TEMPORARY_ITEM_BEING_EDITED:
    case c.ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG:
    case c.ADD_ITEM_BY_MODIFIER_TO_BAG:
    case c.ADD_ITEM_AS_COMBO_QUANTITY: {
      return order(state, action)
    }
    case c.ALERT_MSG: {
      let { msg } = action
      window.alert(msg)
      return state
    }
    default:
      return state
  }
}
