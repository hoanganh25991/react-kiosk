import * as c from "../actions/const-name"
import { makeGetModifier, getBagTemporaryItemBeingEdited, getBagTemporaryWithoutBagItemBeingEdited } from "../selectors"
import moment from "moment"

//
//
//
// bagItem as NORMAL_BAG_ITEM
// bagItem = {
//             item_id,
//             quantity,
//             type: c.NORMAL_BAG_ITEM
//           }
// addItem keep order of currBag
const addItemReadyToBuyToBag = (currBag, item_id, quantity) => {
  let defaultBagItem = { item_id, quantity, type: c.NORMAL_BAG_ITEM }
  let newBagItem = defaultBagItem
  let newBag = currBag.map(bagItem => {
    let sameBagItemType = bagItem.type === c.NORMAL_BAG_ITEM
    let sameBagItemId = bagItem.item_id === newBagItem.item_id
    let sameBagItemExist = sameBagItemType && sameBagItemId

    if (sameBagItemExist) {
      //Update the current one
      let { quantity: currQuanity } = bagItem
      let { quantity: addUpQuanity } = newBagItem
      let quantity = currQuanity + addUpQuanity
      newBagItem = { ...bagItem, quantity }
      return newBagItem
    }

    return bagItem
  })

  // If newBagItem already merge into, done, but if not, add him
  let isNewBagItemAdded = newBagItem !== defaultBagItem
  if (!isNewBagItemAdded) {
    newBag = [...newBag, newBagItem]
  }

  return newBag.filter(bagItem => bagItem.quantity > 0)
}

export const addItemByModifierToModifier = (currModifier, modifier, item_by_modifier_id) => {
  let defaultItem = { item_by_modifier_id, quantity: 1 }
  let newItem = defaultItem
  // Base on modifier multil_select flag
  // Decide toggle or add up quantity
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
  let newModifier = [{ item_by_modifier_id, quantity: 1 }]
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
// bag = [{item_id, quantity, type: c.NORMAL_BAG_ITEM},
//         bagItem2,
//         bagItem3,
//         {
//           item_id,
//           quantity,
//           type: c.MODIFIER_BAG_ITEM
//           chidlren: [
//             modifier_id: [item_id, item_id, item_id],
//             modifier_id: [item_id, item_id, item_id]
//           ]
//         }
//       ]
//click to add item modifier to bag
export const addItemModifierToBag = (currBag, item_id, modifier, item_by_modifier_id, lastItemIdUpdatedTimestamp) => {
  let { id: modifier_id } = modifier
  let defaultBagItem = {
    item_id,
    quantity: 1,
    type: c.MODIFIER_BAG_ITEM,
    lastItemIdUpdatedTimestamp,
    children: { [modifier_id]: [{ item_by_modifier_id, quantity: 1 }] }
  }
  let newBagItem = defaultBagItem
  let newBag = currBag.map(bagItem => {
    let sameBagItemType = bagItem.type === c.MODIFIER_BAG_ITEM
    let sameBagItemId = bagItem.item_id === newBagItem.item_id
    let sameTimestamp = bagItem.lastItemIdUpdatedTimestamp === newBagItem.lastItemIdUpdatedTimestamp
    let sameBagItemExist = sameBagItemType && sameBagItemId && sameTimestamp

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
  let isNewBagItemAdded = newBagItem !== defaultBagItem
  if (!isNewBagItemAdded) {
    newBag = [...newBag, newBagItem]
  }

  return newBag
}

export const addSingleItemByModifierAsComboToBag = (
  currBag,
  item_id,
  modifier,
  item_by_modifier_id,
  quantity,
  lastItemIdUpdatedTimestamp
) => {
  let { id: modifier_id } = modifier
  let defaultBagItem = {
    item_id,
    quantity,
    type: c.MODIFIER_BAG_ITEM,
    lastItemIdUpdatedTimestamp,
    children: { [modifier_id]: [{ item_by_modifier_id, quantity: 1 }] }
  }
  let newBagItem = defaultBagItem
  let newBag = currBag.map(bagItem => {
    let sameBagItemType = bagItem.type === c.MODIFIER_BAG_ITEM
    let sameBagItemId = bagItem.item_id === newBagItem.item_id
    let sameTimestamp = bagItem.lastItemIdUpdatedTimestamp === newBagItem.lastItemIdUpdatedTimestamp
    let sameBagItemExist = sameBagItemType && sameBagItemId && sameTimestamp

    if (sameBagItemExist) {
      // Update the children
      let { quantity: currQuanity } = bagItem
      let { quantity: addedUpQuanity } = newBagItem
      let quantity = currQuanity + addedUpQuanity
      // Why i dont change the children
      // HoiItemByModifierCheckboxRow understand asssss ONLY HAVE ONE
      // ONLY ALLOWED ONE
      // ONLY XXX
      // THIS IS HARD CODE IMPLICIT IN DB
      newBagItem = { ...bagItem, quantity }

      let { mandatory } = modifier
      let mustHaveOne = mandatory === c.MUST_HAVE_ONE
      let newBagItemHasZeroQuantity = newBagItem.quantity <= 0
      if (mustHaveOne && newBagItemHasZeroQuantity) {
        // Ok, return the old bagItem
        // The new one is wrong
        console.log("Bag Item should have one.")
        return bagItem
      }
      return newBagItem
    }

    return bagItem
  })
  // If newBagItem already merge into, done, but if not, add him
  let isNewBagItemAdded = newBagItem !== defaultBagItem
  if (!isNewBagItemAdded) {
    newBag = [...newBag, newBagItem]
  }

  return newBag.filter(bagItem => bagItem.quantity > 0)
}

export const addItemAsComboQuantity = (currBag, item_id, addedUpQuantity, lastItemIdUpdatedTimestamp) => {
  let newBag = currBag.map(bagItem => {
    let sameBagItemType = bagItem.type === c.MODIFIER_BAG_ITEM
    let sameBagItemId = bagItem.item_id === item_id
    let sameTimestamp = bagItem.lastItemIdUpdatedTimestamp === lastItemIdUpdatedTimestamp
    let sameBagItemExist = sameBagItemType && sameBagItemId && sameTimestamp

    if (sameBagItemExist) {
      // Update the children
      let { quantity: currQuanity } = bagItem
      let quantity = currQuanity + addedUpQuantity
      return { ...bagItem, quantity }
    }

    return bagItem
  })

  return newBag.filter(bagItem => bagItem.quantity > 0)
}

export default (state, action) => {
  switch (action.type) {
    case c.CHOOSE_CATEGORY: {
      let { category_id } = action
      let now = moment()
      let lastCategoryIdUpdatedTimestamp = +now.format("X")
      let { order: currOrder } = state
      let order = { ...currOrder, category_id, lastCategoryIdUpdatedTimestamp }
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
      let now = moment()
      let lastItemIdUpdatedTimestamp = +now.format("X")
      let order = { ...currOrder, item_id, lastItemIdUpdatedTimestamp }
      return { ...state, order }
    }
    case c.ADD_ITEM_READY_TO_BUY_TO_BAG: {
      let { item_id, quantity } = action
      let { order: currOrder } = state
      let { bag: currBag, lastItemIdUpdatedTimestamp } = currOrder
      let bag = addItemReadyToBuyToBag(currBag, item_id, quantity, lastItemIdUpdatedTimestamp)
      let order = { ...currOrder, bag }
      return { ...state, order }
    }
    case c.ORDER_PROCESS_STEP_LOAD_MODIFIERS: {
      let { order: currOrder } = state
      let order = { ...currOrder, step: action.type }
      return { ...state, order }
    }
    case c.OPEN_BAG_TEMPORARY: {
      return state
    }
    case c.ADD_ITEM_BY_MODIFIER_TO_BAG_TEMPORARY: {
      let { modifier_id, item_by_modifier_id } = action
      let { order: currOrder } = state
      let { item_id } = currOrder
      let { bagTemporary: currBagTemporary, lastItemIdUpdatedTimestamp } = currOrder
      let modifier = makeGetModifier(modifier_id)(state)
      let bagTemporary = addItemModifierToBag(
        currBagTemporary,
        item_id,
        modifier,
        item_by_modifier_id,
        lastItemIdUpdatedTimestamp
      )
      let order = { ...currOrder, bagTemporary }
      return { ...state, order }
    }
    case c.ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG_TEMPORARY: {
      let { modifier_id, item_by_modifier_id, quantity } = action
      let { order: currOrder } = state
      let { item_id } = currOrder
      let { bagTemporary: currBagTemporary, lastItemIdUpdatedTimestamp } = currOrder
      let modifier = makeGetModifier(modifier_id)(state)
      let bagTemporary = addSingleItemByModifierAsComboToBag(
        currBagTemporary,
        item_id,
        modifier,
        item_by_modifier_id,
        quantity,
        lastItemIdUpdatedTimestamp
      )
      let order = { ...currOrder, bagTemporary }
      return { ...state, order }
    }
    case c.ADD_BAG_TEMPORARY_ITEM_BEING_EDITED_TO_BAG: {
      let bagTemporaryBeingEdited = getBagTemporaryItemBeingEdited(state)
      if (bagTemporaryBeingEdited) {
        let { order: currOrder } = state
        let { bag: currBag } = currOrder
        let bag = [...currBag, bagTemporaryBeingEdited]
        let bagTemporary = getBagTemporaryWithoutBagItemBeingEdited(state)
        let order = { ...currOrder, bag, bagTemporary }
        return { ...state, order }
      }
      return state
    }
    case c.REMOVE_BAG_TEMPORARY_ITEM_BEING_EDITED: {
      let bagTemporary = getBagTemporaryWithoutBagItemBeingEdited(state)
      let { order: currOrder } = state
      let order = { ...currOrder, bagTemporary }
      return { ...state, order }
    }
    case c.ADD_SINGLE_ITEM_BY_MODIFIER_AS_COMBO_TO_BAG: {
      let { modifier_id, item_by_modifier_id, quantity } = action
      let { order: currOrder } = state
      let { item_id } = currOrder
      let { bag: currBag, lastItemIdUpdatedTimestamp } = currOrder
      let modifier = makeGetModifier(modifier_id)(state)
      let bag = addSingleItemByModifierAsComboToBag(
        currBag,
        item_id,
        modifier,
        item_by_modifier_id,
        quantity,
        lastItemIdUpdatedTimestamp
      )
      let order = { ...currOrder, bag }
      return { ...state, order }
    }
    case c.ADD_ITEM_BY_MODIFIER_TO_BAG: {
      let { modifier_id, item_by_modifier_id } = action
      let { order: currOrder } = state
      let { item_id } = currOrder
      let { bag: currBag, lastItemIdUpdatedTimestamp } = currOrder
      let modifier = makeGetModifier(modifier_id)(state)
      let bag = addItemModifierToBag(currBag, item_id, modifier, item_by_modifier_id, lastItemIdUpdatedTimestamp)
      let order = { ...currOrder, bag }
      return { ...state, order }
    }
    case c.ADD_ITEM_AS_COMBO_QUANTITY: {
      let { item_id, quantity, lastItemIdUpdatedTimestamp } = action
      let { order: currOrder } = state
      let { bag: currBag } = currOrder
      let bag = addItemAsComboQuantity(currBag, item_id, quantity, lastItemIdUpdatedTimestamp)
      let order = { ...currOrder, bag }
      return { ...state, order }
    }
    default:
      return state
  }
}
