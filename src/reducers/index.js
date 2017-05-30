import fakeData from "./fake-data"
import * as c from "../actions/const-name"
import order from "./order"

const initState = {
  ...fakeData,
  order: {
    category_id: null,
    subcategory_id: null,
    item_id: null,
    step: null
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case c.CHOOSE_CATEGORY: {
      return order(state, action)
    }
    default:
      return state
  }
}
