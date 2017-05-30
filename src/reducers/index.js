import fakeData from "./fake-data"
import * as c from "../actions/const-name"
import order from "./order"

const initState = {
  ...fakeData,
  order: {
    category_id: -1,
    item_id: null,
    step: null
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case c.CHOOSE_CATEGORY:
    case c.LOAD_ITEMS_BY_CATEGORY: {
      return order(state, action)
    }
    default:
      return state
  }
}
