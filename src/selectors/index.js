import { createSelector } from "reselect"

const categoriesSelector = state => state.categories
const categoryIdSelector = state => state.order.category_id
export const getSubCategoriesByCategory = createSelector(
  [categoriesSelector, categoryIdSelector],
  (categories, category_id) => categories.filter(category => category.main_category_id === category_id)
)
