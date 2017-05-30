import * as c from "./const-name"

export const actionNormalizeSubCategoriesByCategory = category_id => ({
  type: c.NORMALIZE_SUB_CATEGORIES_BY_CATEGORY,
  category_id
})
