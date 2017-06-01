import * as c from "../actions/const-name"

const priceLevel = "price1"

//
//
//
// bagItem as NORMAL_BAG_ITEM
// bagItem = {
//             item_id,
//             quanity,
//             type: c.NORMAL_BAG_ITEM
//           }
// how to add one to EXIST bag
const addItemToBag = (currBag, item_id) => {
  let newBagItem = { item_id, quanity: 1, type: c.NORMAL_BAG_ITEM }
  let newBag = currBag.reduce(
    (carry, bagItem) => {
      let sameBagItemType = bagItem.type === c.NORMAL_BAG_ITEM
      let sameBagItemId = bagItem.item_id === newBagItem.item_id
      let sameBagItemExist = sameBagItemType && sameBagItemId
      if (sameBagItemExist) {
        // Update quanity of newBagItem
        let { quanity: currQuanity } = bagItem
        newBagItem.quanity = currQuanity + newBagItem.quanity
        return carry
      }
      // Nothing conflict happen
      // So just re-add bagItem back
      return [...carry, bagItem]
    },
    [newBagItem]
  )
  // Reorder bagItem
  // The newBagItem, should at the end of currBag
  // So, move the first one to the end
  let firstBagItem = newBag[0]
  let restBagItem = newBag.slice(1)
  return [...restBagItem, firstBagItem]
}

//const addItemToBagV2 = (currBag, item_id) => {}
//
//
//
//
//
// bag = [{item_id, quanity, type: c.NORMAL_BAG_ITEM},
//         bagItem2,
//         bagItem3,
//         {
//           item_id,
//           quanity,
//           type: c.MODIFIER_BAG_ITEM
//           chidlren: [
//             modifier_id: [item_id, item_id, item_id],
//             modifier_id: [item_id, item_id, item_id]
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
      let { order: currOrder } = state
      let { bag: currBag } = currOrder
      let bag = addItemToBag(currBag, item_id)
      let order = { ...currOrder, bag }
      return { ...state, order }
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
