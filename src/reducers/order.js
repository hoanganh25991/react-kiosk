import * as c from "../actions/const-name"

const priceLevel = "price1"
const addItemToBag = (bag, item) => {
  let { [priceLevel]: item_price } = item
  let newBagItem = { ...item, quanity: 1, type: c.NORMAL_BAG_ITEM, item_price }
  let newBag = bag.reduce(
    (carry, bagItem) => {
      let alreadyExist = bagItem.id === newBagItem.id
      if (alreadyExist) {
        // Update quanity of newBagItem
        let { quanity: currQuanity } = bagItem
        newBagItem.quanity = currQuanity + newBagItem.quanity
        return carry
      }

      return [...carry, bagItem]
    },
    [newBagItem]
  )
  return newBag
}

export default (state, action) => {
  switch (action.type) {
    case c.CHOOSE_CATEGORY: {
      let { category_id } = action
      let { order: currOrder } = state
      let order = { ...currOrder, category_id }
      return { ...state, order }
    }
    case c.ORDER_PROCESS_STEP_LOAD_ITEMS: {
      let { order: currOrder } = state
      let order = { ...currOrder, step: action.type }
      return { ...state, order }
    }
    case c.CHOOSE_ITEM: {
      let { order: currOrder } = state
      let { item_id } = action
      let order = { ...currOrder, item_id }
      return { ...state, order }
    }
    case c.ADD_TIME_TO_BAG: {
      let { item_id } = action
      let { items } = state
      let item = items.filter(item => item.id === item_id)[0]
      if (item) {
        let { order: { bag: currBag }, order: currOrder } = state
        let bag = addItemToBag(currBag, item)
        let order = { ...currOrder, bag }
        return { ...state, order }
      }
      // Should throw something is wrong about item_id
      //throw new Error(`Cant find item, Id: ${item_id}`)
      return state
    }
    case c.ORDER_PROCESS_STEP_LOAD_MODIFIERS: {
      let { order: currOrder } = state
      let order = { ...currOrder, step: action.type }
      return { ...state, order }
    }
    default:
      return state
  }
}
