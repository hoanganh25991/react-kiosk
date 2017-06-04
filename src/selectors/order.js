import { createSelector } from "reselect"

// From table data
const categories = state => state.categories
const items = state => state.items
const modifiers = state => state.modifier_groups
const order = state => state.order
const bag = state => state.order.bag
const bagTemporary = state => state.order.bagTemporary
// From pivot
const pivotCategoryItems = state => state.category_items
const pivotItemModifiers = state => state.item_modifier_groups
const pivotModifierItems = state => state.modifier_group_items
// Form order
const orderCategoryId = state => state.order.category_id
const orderItemId = state => state.order.item_id

// Get obj from id
export const makeGetCategory = category_id =>
  createSelector([categories], categories => categories.filter(category => category.id === category_id)[0])
export const makeGetItem = item_id => createSelector([items], items => items.filter(item => item.id === item_id)[0])
export const makeGetModifier = modifier_id =>
  createSelector([modifiers], modifiers => modifiers.filter(modifier => modifier.id === modifier_id)[0])
export const makeGetBagItem = item_id =>
  createSelector([bag], bag => {
    return bag.filter(bagItem => bagItem.item_id === item_id)[0]
  })
export const makeGetBagTemporaryItem = item_id =>
  createSelector([bagTemporary], bagTemporary => {
    return bagTemporary.filter(bagItem => bagItem.item_id === item_id)[0]
  })

export const getSubCategoriesByCategory = createSelector([categories, orderCategoryId], (categories, category_id) =>
  categories.filter(category => category.main_category_id === category_id)
)

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

export const makeGetShouldLoadSingleItemByModifierAsCombo = items =>
  createSelector([order], order => {
    let { item_id: orderItemId } = order
    let hasOnlyOneItem = items.length === 1
    let sameAsOrderItemId = items[0].id === orderItemId
    return hasOnlyOneItem && sameAsOrderItemId
  })

export const makeGetBagItemQuantity = item_id =>
  createSelector([makeGetBagItem(item_id)], currBagItem => {
    if (currBagItem) {
      let { quantity } = currBagItem
      return quantity
    }
    return 0
  })

export const makeGetBagTemporaryItemQuantity = item_id =>
  createSelector([makeGetBagTemporaryItem(item_id)], currBagTemporaryItem => {
    if (currBagTemporaryItem) {
      let { quantity } = currBagTemporaryItem
      return quantity
    }
    return 0
  })

export const makeGetSingleItemByModifierAsComboQuantity = item_id =>
  createSelector([makeGetBagItemQuantity(item_id)], quantity => quantity)

export const makeGetSingleItemByModifierAsComboQuantityTemporary = item_id =>
  createSelector([makeGetBagTemporaryItemQuantity(item_id)], quantity => quantity)
