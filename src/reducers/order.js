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
const addItemToBagV2 = (currBag, item_id) => {
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
  // let firstBagItem = newBag[0]
  // let restBagItem = newBag.slice(1)
  // return [...restBagItem, firstBagItem]
  return newBag
}
//
//
//
//
// addItem keep order of currBag
const addItemToBag = (currBag, item_id) => {
  let defaultBagItem = { item_id, quanity: 1, type: c.NORMAL_BAG_ITEM }
  let newBagItem = defaultBagItem
  let newBag = currBag.map(bagItem => {
    let sameBagItemType = bagItem.type === c.NORMAL_BAG_ITEM
    let sameBagItemId = bagItem.item_id === newBagItem.item_id
    let sameBagItemExist = sameBagItemType && sameBagItemId

    if (sameBagItemExist) {
      //Update the current one
      let { quanity: currQuanity } = bagItem
      let { quanity: addUpQuanity } = newBagItem
      let quanity = currQuanity + addUpQuanity
      newBagItem = { ...newBagItem, quanity }
      return newBagItem
    }

    return bagItem
  })

  // If newBagItem already merge into, done, but if not, add him
  let isNewBagItemAdded = newBagItem != defaultBagItem
  if (!isNewBagItemAdded) {
    newBag = [...newBag, newBagItem]
  }

  return newBag
}

export const addItemByModifierToModifier = (currModifier, item_by_modifier_id) => {
  let defaultItem = { item_by_modifier_id, quanity: 1 }
  let newItem = defaultItem
  let newModifier = currModifier.map(item => {
    let sameItemExist = item.item_by_modifier_id === newItem.item_by_modifier_id
    if (sameItemExist) {
      let { quanity: currQuanity } = item
      let { quanity: addedUpQuanity } = newItem
      let quanity = currQuanity + addedUpQuanity
      newItem = { ...newItem, quanity }
      return newItem
    }
    return item
  })
  let isNewItemAdded = newItem != defaultItem
  if (!isNewItemAdded) {
    newModifier = [...newModifier, newItem]
  }
  return newModifier
}

export const addModifierToChildren = (currChildren, modifier_id, item_by_modifier_id) => {
  let newModifier = [{ item_by_modifier_id, quanity: 1 }]
  let sameModifierExist = currChildren[modifier_id]
  if (sameModifierExist) {
    let { [modifier_id]: currModifier } = currChildren
    newModifier = addItemByModifierToModifier(currModifier, item_by_modifier_id)
  }
  return { ...currChildren, [modifier_id]: newModifier }
}
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
export const addItemModifierToBag = (currBag, item_id, modifier_id, item_by_modifier_id) => {
  let defaultBagItem = {
    item_id,
    quanity: 1,
    type: c.MODIFIER_BAG_ITEM,
    children: { [modifier_id]: [{ item_by_modifier_id, quanity: 1 }] }
  }
  let newBagItem = defaultBagItem
  let newBag = currBag.map(bagItem => {
    let sameBagItemType = bagItem.type === c.MODIFIER_BAG_ITEM
    let sameBagItemId = bagItem.item_id === newBagItem.item_id
    let sameBagItemExist = sameBagItemType && sameBagItemId

    if (sameBagItemExist) {
      // Update the children
      let { children: currChildren } = bagItem
      let children = addModifierToChildren(currChildren, modifier_id, item_by_modifier_id)
      newBagItem = { ...newBagItem, children }
      return newBagItem
    }
    return bagItem
  })
  // If newBagItem already merge into, done, but if not, add him
  let isNewBagItemAdded = newBagItem != defaultBagItem
  if (!isNewBagItemAdded) {
    newBag = [...newBag, newBagItem]
  }

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
      let { modifier_id, item_by_modifier_id } = action
      let { order: currOrder, items } = state
      let { item_id } = currOrder
      let { bag: currBag } = currOrder
      let bag = addItemModifierToBag(currBag, item_id, modifier_id, item_by_modifier_id)
      let order = { ...currOrder, bag }
      return { ...state, order }
    }
    default:
      return state
  }
}
