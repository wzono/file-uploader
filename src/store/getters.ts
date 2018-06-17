import store from "./store";
import { generateFnsMap } from '../utils/index'

const getters = generateFnsMap(store.get)
const storeGetters = getters(store.stateGetter()) as any

export default storeGetters;