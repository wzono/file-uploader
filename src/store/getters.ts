import store from "./store";

const pick = (field = "", object : any = {}) => object[field]

export const fnsGenerate = (saveObj : object, fn: Function) => (object : object) => Object
  .keys(object)
  .reduce((acc : object, cur : string) => {
    return {
      ...acc,
      [cur]: fn(cur)
    }
  }, saveObj);

const getter = {}
const getters = fnsGenerate(getter, store.get)
const storeGetters = getters(store.stateGetter)

export default storeGetters;