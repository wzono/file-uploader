import store from './store'
import {generateFnsMap} from '../utils/index'

const commiters = generateFnsMap(store.commit)
const actionsCommiters = commiters(store.stateGetter()) as any

export default actionsCommiters;