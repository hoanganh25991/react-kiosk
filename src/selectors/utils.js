import { createSelector } from "reselect"

// From table data
const categories = state => state.categories
const items = state => state.items
const modifiers = state => state.modifier_groups

// Build get obj from id
export const makeGetCategory = category_id =>
  createSelector([categories], categories => categories.filter(category => category.id === category_id)[0])
export const makeGetItem = item_id => createSelector([items], items => items.filter(item => item.id === item_id)[0])
export const makeGetModifier = modifier_id =>
  createSelector([modifiers], modifiers => modifiers.filter(modifier => modifier.id === modifier_id)[0])
