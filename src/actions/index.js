import * as c from "./const-name"
export * from "./order"
const constNameValidator = {
  get(obj, prop) {
    if (obj[prop]) {
      return prop
    } else {
      throw new TypeError(`${prop} is not a valid action type`)
    }
  }
}
export const constName = new Proxy(c, constNameValidator)
