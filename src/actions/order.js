import * as c from "./const-name"

export const actionChooseCategory = category_id => ({ type: c.CHOOSE_CATEGORY, category_id })

export const actionLoadItemsByCategory = categoryId => {
  return (dispatch, getState) => {
    dispatch({ type: c.LOAD_ITEMS_BY_CATEGORY })
    let { category_items, items } = getState()
    let item_ids = category_items.filter(pivot => pivot.category_id === categoryId).map(pivot => pivot.item_id)
    let itemByCategory = items.filter(item => item_ids.includes(item.id))
    return itemByCategory
  }
}
