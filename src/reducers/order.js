import * as c from "../actions/const-name"

export default (state, action) => {
  switch (action.type) {
    case c.CHOOSE_CATEGORY: {
      let { category_id } = action
      // Update order
      let { order: currOrder } = state
      let order = { ...currOrder, category_id }
      // Update state
      return { ...state, order }
    }
    case c.LOAD_ITEMS_BY_CATEGORY: {
      return state
    }
    default:
      return state
  }
}
