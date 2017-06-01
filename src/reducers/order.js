import * as c from "../actions/const-name"

const priceLevel = "price1"
const addItemToBag = (bag, item) => {
  let { [priceLevel]: item_price } = item
  // Self reference item -> item, then clone all of it data out
  // Update with quanity & item_price
  let newBagItem = { item, ...item, quanity: 1, type: c.NORMAL_BAG_ITEM, item_price }
  let newBag = bag.reduce(
    (carry, bagItem) => {
      let alreadyExist = bagItem.id === newBagItem.id && bagItem.type === c.NORMAL_BAG_ITEM
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
//
//
//
//
//
// bag = [{item_id, item_price, quanity,...item, type: c.NORMAL_BAG_ITEM},
//         bagItem2,
//         bagItem3,
//         {
//           item_id,
//           item_price, // this is the caculate of its child
//           quanity,
//           type: c.MODIFIER_BAG_ITEM
//           chidlren: [
//             {item_id, modifier_id},
//             {item_id, modifier_id},
//             {item_id, modifier_id}
//           ]
//         }
//       ]
//click to add item modifier to bag
const addItemModifierToBag = ({ currBag, orderItem, modifier, item }) => {
  let newBagItem = { children: [], ...orderItem, item: orderItem, quanity: 1 }
  let newBag = currBag.reduce(
    (carry, bagItem) => {
      let isNewBagItemExist = bagItem.id === newBagItem.id && bagItem.type === c.MODIFIER_BAG_ITEM
      if (isNewBagItemExist) {
        let { children: curChildren } = bagItem
        let isNewItemByModifierExist = curChildren.filter(
          itemByModifier => itemByModifier.id === item.id && itemByModifier.modifier_id === modifier.id
        )
        if (isNewItemByModifierExist) {
          // Should check something
        }
        let newItemByModifier = { ...item, modifier_id: modifier.id }
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
    case c.ADD_ITEM_BY_MODIFIER_TO_BAG: {
      let { modifier, item } = action
      let { order: currOrder, items } = state
      let { item_id: orderItemId } = currOrder
      let orderItem = items.filter(item => item.id === orderItemId)[0]
      let { bag: currBag } = currOrder
      let bag = addItemModifierToBag({ currBag, orderItem, modifier, item })
      let order = { ...currOrder, bag }
      return { ...state, order }
    }
    default:
      return state
  }
}
