import * as c from "../actions/const-name"

export default (state, action) => {
  switch (action.type) {
    case c.NORMALIZE_SUB_CATEGORIES_BY_CATEGORY: {
      let { subCategoriesByCategory: currSubCategoriesByCategory } = state
      let { category_id = null } = action
      // When no category_id submitted
      if (category_id === null) {
        let { order: { category_id: orderCategoryId } } = state
        category_id = orderCategoryId
      }
      let alreadyExist = currSubCategoriesByCategory[category_id]
      if (!alreadyExist) {
        let { categories } = state
        let subCategories = categories.filter(category => category.main_category_id === category_id)
        let subCategoriesByCategory = { ...currSubCategoriesByCategory, [category_id]: subCategories }
        return { ...state, subCategoriesByCategory }
      }
      // Nothing to update
      return state
    }
    case c.NORMALIZE_ITEMS_BY_CATEGORY: {
      let { itemsByCategory: currItemsByCategory } = state
      let { category_id } = action
      let alreadyExist = currItemsByCategory[category_id]
      if (!alreadyExist) {
        let { category_items, items } = state
        let item_ids = category_items.filter(pivot => pivot.category_id === category_id).map(pivot => pivot.item_id)
        let filteredItems = items.filter(item => item_ids.includes(item.id))
        let itemsByCategory = { ...currItemsByCategory, [category_id]: filteredItems }
        return { ...state, itemsByCategory }
      }
      // Nothing to update
      return state
    }
    case c.NORMALIZE_MODIFIERS_BY_ITEM: {
      let { modifiersByItem: currModifiersByItem } = state
      let { item_id } = action
      let alreadyExist = currModifiersByItem[item_id]
      if (!alreadyExist) {
        let { item_modifier_groups, modifier_groups } = state
        let modifier_ids = item_modifier_groups
          .filter(pivot => pivot.parent_item_id === item_id)
          .map(pivot => pivot.modifier_group_id)
        let filteredModifiers = modifier_groups.filter(modifier => modifier_ids.includes(modifier.id))
        let modifiersByItem = { ...currModifiersByItem, [item_id]: filteredModifiers }
        return { ...state, modifiersByItem }
      }
      // Nothing to update
      return state
    }
    case c.NORMALIZE_ITEMS_BY_MODIFIER: {
      let { itemsByModifier: currItemsByModifier } = state
      let { modifier_id } = action
      let alreadyExist = currItemsByModifier[modifier_id]
      if (!alreadyExist) {
        let { modifier_group_items, items } = state
        let item_ids = modifier_group_items
          .filter(pivot => pivot.modifier_group_id === modifier_id)
          .map(pivot => pivot.item_id)
        let filteredItems = items.filter(item => item_ids.includes(item.id))
        let itemsByModifier = { ...currItemsByModifier, [modifier_id]: filteredItems }
        return { ...state, itemsByModifier }
      }
      // Nothing to update
      return state
    }
    default:
      return state
  }
}
