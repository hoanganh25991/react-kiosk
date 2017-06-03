import { createSelector } from "reselect"

const categories = state => state.categories
const orderCategoryId = state => state.order.category_id
export const getSubCategoriesByCategory = createSelector([categories, orderCategoryId], (categories, category_id) =>
  categories.filter(category => category.main_category_id === category_id)
)

const categoryId = (state, props) => props.category_id
const pivotCategoryItems = state => state.category_items
const items = state => state.items
export const getItemsByCategory = createSelector(
  [categoryId, pivotCategoryItems, items],
  (categoryId, pivotCategoryItems, items) => {
    let item_ids = pivotCategoryItems.filter(pivot => pivot.category_id === categoryId).map(pivot => pivot.item_id)
    return items.filter(item => item_ids.includes(item.id))
  }
)
