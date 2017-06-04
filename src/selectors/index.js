import { createSelector } from "reselect"

// From table data
const categories = state => state.categories
const items = state => state.items
const modifiers = state => state.modifier_groups
// From pivot
const pivotCategoryItems = state => state.category_items
const pivotItemModifiers = state => state.item_modifier_groups
const pivotModifierItems = state => state.modifier_group_items
// Form order
const orderCategoryId = state => state.order.category_id
const orderItemId = state => state.order.item_id

// Get subcategories from order category id
export const getSubCategoriesByCategory = createSelector([categories, orderCategoryId], (categories, category_id) =>
  categories.filter(category => category.main_category_id === category_id)
)

export const makeGetItemsByCategory = category_id =>
  createSelector([pivotCategoryItems, items], (pivotCategoryItems, items) => {
    let item_ids = pivotCategoryItems.filter(pivot => pivot.category_id === category_id).map(pivot => pivot.item_id)
    return items.filter(item => item_ids.includes(item.id))
  })
