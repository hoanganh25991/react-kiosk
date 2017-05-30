import fakeData from "./fake-data"
import * as c from "../actions/const-name"
import order from "./order"
import normalize from "./normalize"

const initState = {
  ...fakeData,
  order: {
    category_id: -1,
    item_id: null,
    step: null
  },
  subCategoriesByCategory: {},
  itemsByCategory: {},
  modifiersByItem: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case c.CHOOSE_CATEGORY:
    case c.ORDER_PROCESS_STEP_LOAD_ITEMS:
    case c.CHOOSE_ITEM:
    case c.ORDER_PROCESS_STEP_LOAD_MODIFIERS: {
      return order(state, action)
    }
    case c.NORMALIZE_SUB_CATEGORIES_BY_CATEGORY:
    case c.NORMALIZE_ITEMS_BY_CATEGORY:
    case c.NORMALIZE_MODIFIERS_BY_ITEM: {
      return normalize(state, action)
    }
    default:
      return state
  }
}
