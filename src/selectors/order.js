import { createSelector } from "reselect"
import * as c from "../actions/const-name"
// From table data
const state = state => state
const categories = state => state.categories
const items = state => state.items
const modifiers = state => state.modifier_groups
const order = state => state.order
const bag = state => state.order.bag
// From pivot
const pivotCategoryItems = state => state.category_items
const pivotItemModifiers = state => state.item_modifier_groups
const pivotModifierItems = state => state.modifier_group_items
// Form order
// Get obj from id
export const makeGetCategory = category_id =>
  createSelector([categories], categories => categories.filter(category => category.id === category_id)[0])
export const makeGetItem = item_id => createSelector([items], items => items.filter(item => item.id === item_id)[0])
export const makeGetModifier = modifier_id =>
  createSelector([modifiers], modifiers => modifiers.filter(modifier => modifier.id === modifier_id)[0])
export const makeGetNormalBagItem = item_id =>
  createSelector([bag], bag => {
    return bag.filter(bagItem => bagItem.item_id === item_id && bagItem.type === c.NORMAL_BAG_ITEM)[0]
  })
export const getBagTemporaryItemBeingEdited = createSelector([order], order => {
  let { item_id, lastItemIdUpdatedTimestamp, bagTemporary } = order
  return bagTemporary.filter(
    bagTemporaryItem =>
      bagTemporaryItem.item_id === item_id && bagTemporaryItem.lastItemIdUpdatedTimestamp === lastItemIdUpdatedTimestamp
  )[0]
})
export const getBagTemporaryWithoutBagItemBeingEdited = createSelector([order], order => {
  let { item_id, lastItemIdUpdatedTimestamp, bagTemporary } = order
  let bagTemporaryWithoutBagItemBeingEdited = bagTemporary.filter(
    bagTemporaryItem =>
      bagTemporaryItem.item_id !== item_id && bagTemporaryItem.lastItemIdUpdatedTimestamp !== lastItemIdUpdatedTimestamp
  )
  return bagTemporaryWithoutBagItemBeingEdited
})

export const makeGetSubCategoriesByCategory = category_id =>
  createSelector([categories], categories => categories.filter(category => category.main_category_id === category_id))

// Get items from category id
export const makeGetItemsByCategory = category_id =>
  createSelector([pivotCategoryItems, items], (pivotCategoryItems, items) => {
    let item_ids = pivotCategoryItems.filter(pivot => pivot.category_id === category_id).map(pivot => pivot.item_id)
    return items.filter(item => item_ids.includes(item.id))
  })

// Get modifiers from item id
export const makeGetModifiersByItem = item_id =>
  createSelector([pivotItemModifiers, modifiers], (pivotItemModifiers, modifiers) => {
    let modifier_ids = pivotItemModifiers
      .filter(pivot => pivot.parent_item_id === item_id)
      .map(pivot => pivot.modifier_group_id)
    return modifiers.filter(modifier => modifier_ids.includes(modifier.id))
  })

// Get items from modifier id
export const makeGetItemsByModifiers = modifier_id =>
  createSelector([pivotModifierItems, items], (pivotModifierItems, items) => {
    let item_ids = pivotModifierItems
      .filter(pivot => pivot.modifier_group_id === modifier_id)
      .map(pivot => pivot.item_id)
    return items.filter(item => item_ids.includes(item.id))
  })

export const shouldLoadSingleItemByModifierAsCombo = items => {
  let hasOnlyOneItem = items.length === 1
  return hasOnlyOneItem
}

export const makeGetNormalBagItemQuantity = item_id =>
  createSelector([makeGetNormalBagItem(item_id)], currBagItem => {
    if (currBagItem) {
      let { quantity } = currBagItem
      return quantity
    }
    return 0
  })

export const getSingleItemByModifierAsComboQuantityTemporaryBeingEdited = createSelector(
  [getBagTemporaryItemBeingEdited],
  currBagItem => {
    if (currBagItem) {
      let { quantity } = currBagItem
      return quantity
    }
    return 0
  }
)

export const makeGetIsItemByModifierSelectedInBagTemporaryItemBeingEdited = (modifier_id, item_by_modifier_id) =>
  createSelector([getBagTemporaryItemBeingEdited], currBagTemporaryItem => {
    if (currBagTemporaryItem) {
      let { children: { [modifier_id]: items_by_modifier } } = currBagTemporaryItem
      return items_by_modifier.filter(item => item.item_by_modifier_id === item_by_modifier_id).length > 0
    }
    return false
  })

export const makeGetIsItemReadyToBuyHadBeenSelected = item_id =>
  createSelector([bag], bag => {
    return bag.filter(bagItem => bagItem.item_id === item_id).length > 0
  })

/**
 * For Order Info
 * Parse order
 */
export const getOrderInfo = createSelector([state, order], (state, order) => {
  let { bag } = order
  let bagParsed = bag.map(bagItem => {
    switch (bagItem.type) {
      case c.NORMAL_BAG_ITEM: {
        let itemOrigin = makeGetItem(bagItem.item_id)(state)
        let item_price = itemOrigin[c.DEFAULT_PRICE_LEVEL]
        return { ...bagItem, ...itemOrigin, item_price, item: itemOrigin }
      }
      case c.MODIFIER_BAG_ITEM: {
        let { children } = bagItem
        let children_items = Object.keys(children).reduce((carry, modifier_id) => {
          let items = children[modifier_id]
          let itemsWithModifierId = items.map(item => {
            let itemOrigin = makeGetItem(item.item_by_modifier_id)(state)
            return {
              ...item,
              ...itemOrigin,
              item_id: item.item_by_modifier_id,
              modifier_group_id: +modifier_id,
              item: itemOrigin
            }
          })
          // Flat items inside each modifier in children
          // Single array of items under children
          carry = [...carry, ...itemsWithModifierId]
          return carry
        }, [])

        let itemOrigin = makeGetItem(bagItem.item_id)(state)
        let item_price = children_items.reduce((carry, itemInfo) => {
          let modifier = makeGetModifier(itemInfo.modifier_group_id)(state)
          let priceLevel = modifier.price_level
          let itemOrigin = itemInfo.item
          let itemTotal = itemOrigin[priceLevel] * itemInfo.quantity
          carry += itemTotal
          return carry
        }, 0)

        return { ...bagItem, ...itemOrigin, item_price, children: children_items, item: itemOrigin }
      }
      default: {
        return bagItem
      }
    }
  })
  //console.log(bagParsed)
  return bagParsed
})
