import store from './store'
import { fnsGenerate } from './getters'

const commiter = {}
const commiters = fnsGenerate(commiter, store.commit)
const actionsCommiters = commiters(store.stateGetter)

export default actionsCommiters;