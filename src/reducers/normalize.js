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
    default:
      return state
  }
}
