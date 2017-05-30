import * as c from "./const-name"

export const actionNormalizeSubCategoriesByCategory = category_id => ({
  type: c.NORMALIZE_SUB_CATEGORIES_BY_CATEGORY,
  category_id
})

export const actionNormalizeItemsByCategory = category_id => ({
  type: c.NORMALIZE_ITEMS_BY_CATEGORY,
  category_id
})

export const actionNormalizeModifiersByItem = item_id => ({
  type: c.NORMALIZE_MODIFIERS_BY_ITEM,
  item_id
})

export const actionNormalizeItemsByModifier = modifier_id => ({
  type: c.NORMALIZE_ITEMS_BY_MODIFIER,
  modifier_id
})
