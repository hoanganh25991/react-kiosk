import fakeData from "./fake-data"

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
    default:
      return state
  }
}
