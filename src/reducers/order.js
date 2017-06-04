import * as c from "../actions/const-name"

const priceLevel = "price1"

export const addNewOrUpdateOrderBag = ({ lastCategoryIdChanged, previousCategoryIdChanged }) => {
  let whatShoudDo
  switch (true) {
    case lastCategoryIdChanged > previousCategoryIdChanged: {
      whatShoudDo = c.ADD_NEW_TO_ORDER_BAG
      break
    }
    default: {
      whatShoudDo = c.UPDATE_ORDER_BAG
      break
    }
  }
  return whatShoudDo
}

//
//
//
// bagItem as NORMAL_BAG_ITEM
// bagItem = {
//             item_id,
//             quanity,
//             type: c.NORMAL_BAG_ITEM
//           }
// addItem keep order of currBag
const addItemReadyToBuyToBag = (currBag, item_id) => {
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

export const addItemByModifierToModifier = (currModifier, modifier, item_by_modifier_id) => {
  let defaultItem = { item_by_modifier_id, quanity: 1 }
  let newItem = defaultItem
  // Base on modifier multil_select flag
  // Decide toggle or add up quanity
  let { multi_select, mandatory } = modifier
  let newModifier
  if (multi_select === c.MULTI_SELECT) {
    newModifier = currModifier.reduce(
      (carry, item) => {
        let sameItemExist = item.item_by_modifier_id === newItem.item_by_modifier_id
        if (sameItemExist) {
          return carry.slice(1)
        }
        return [...carry, item]
      },
      [newItem]
    )
  } else {
    // Only allow one item added
    newModifier = [newItem]
  }

  if (mandatory === c.MUST_HAVE_ONE) {
    return newModifier.length > 0 ? newModifier : currModifier
  }
}

export const addModifierToChildren = (currChildren, modifier, item_by_modifier_id) => {
  let { id: modifier_id } = modifier
  let newModifier = [{ item_by_modifier_id, quanity: 1 }]
  let sameModifierExist = currChildren[modifier_id]
  if (sameModifierExist) {
    let { [modifier_id]: currModifier } = currChildren
    newModifier = addItemByModifierToModifier(currModifier, modifier, item_by_modifier_id)
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
export const addItemModifierCheckboxRowToBag = (currBag, item_id, modifier, item_by_modifier_id) => {
  let { id: modifier_id } = modifier
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
      let children = addModifierToChildren(currChildren, modifier, item_by_modifier_id)
      newBagItem = { ...bagItem, children }
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

export const addItemModifierToBag = (currBag, item_id, modifier, item_by_modifier_id) => {
  let { id: modifier_id } = modifier
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
      let { quanity: currQuanity } = bagItem
      let { quanity: addedUpQuanity } = newBagItem
      let quanity = currQuanity + addedUpQuanity
      // Why i dont change the children
      // HoiItemByModifier understand asssss ONLY HAVE ONE
      // ONLY ALLOWED ONE
      // ONLY XXX
      // THIS IS HARD CODE IMPLICIT IN DB
      newBagItem = { ...bagItem, quanity }
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

export const removeItemModifierToBag = (currBag, item_id, modifier, item_by_modifier_id) => {
  let { id: modifier_id } = modifier
  let defaultBagItem = {
    item_id,
    quanity: -1,
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
      let { quanity: currQuanity } = bagItem
      let { quanity: addedUpQuanity } = newBagItem
      let quanity = currQuanity + addedUpQuanity
      // Why i dont change the children
      // HoiItemByModifier understand asssss ONLY HAVE ONE
      // ONLY ALLOWED ONE
      // ONLY XXX
      // THIS IS HARD CODE IMPLICIT IN DB
      newBagItem = { ...bagItem, quanity }
      // Should have check of mandatory & multiselect
      // Implicit in idea >>> no need check on these code
      // Remove doesnt have meaning when remove to 0
      return quanity > 0 ? newBagItem : bagItem
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
    case c.UPDATE_LAST_ORDER_CATEGORY_ID_CHANGED_TIMESTAMP: {
      let { timestamp: lastCategoryIdUpdatedTimestamp } = action
      let { order: currOrder } = state
      let order = { ...currOrder, lastCategoryIdUpdatedTimestamp }
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
    case c.ADD_ITEM_READY_TO_BUY_TO_BAG: {
      let { item_id } = action
      let { order: currOrder } = state
      let { bag: currBag } = currOrder
      let bag = addItemReadyToBuyToBag(currBag, item_id)
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
      let { modifier_groups } = state
      let modifier = modifier_groups.filter(modifier => modifier.id === modifier_id)[0]
      let bag = addItemModifierToBag(currBag, item_id, modifier, item_by_modifier_id)
      let order = { ...currOrder, bag }
      return { ...state, order }
    }
    case c.REMOVE_ITEM_BY_MODIFIER_TO_BAG: {
      let { modifier_id, item_by_modifier_id } = action
      let { order: currOrder, items } = state
      let { item_id } = currOrder
      let { bag: currBag } = currOrder
      let { modifier_groups } = state
      let modifier = modifier_groups.filter(modifier => modifier.id === modifier_id)[0]
      let bag = removeItemModifierToBag(currBag, item_id, modifier, item_by_modifier_id)
      let order = { ...currOrder, bag }
      return { ...state, order }
    }
    case c.ADD_ITEM_BY_MODIFIER_CHECKBOX_ROW_TO_BAG: {
      let { modifier_id, item_by_modifier_id } = action
      let { order: currOrder, items } = state
      let { item_id } = currOrder
      let { bag: currBag } = currOrder
      let { modifier_groups } = state
      let modifier = modifier_groups.filter(modifier => modifier.id === modifier_id)[0]
      let bag = addItemModifierCheckboxRowToBag(currBag, item_id, modifier, item_by_modifier_id)
      let order = { ...currOrder, bag }
      return { ...state, order }
    }
    default:
      return state
  }
}
