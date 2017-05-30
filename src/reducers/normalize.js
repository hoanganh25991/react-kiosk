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
        let itemsX = items.filter(item => item_ids.includes(item.id))
        let itemsByCategory = { ...currItemsByCategory, [category_id]: itemsX }
        return { ...state, itemsByCategory }
      }
      // Nothing to update
      return state
    }
    default:
      return state
  }
}
