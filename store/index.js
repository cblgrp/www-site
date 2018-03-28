import Vuex from 'vuex'

import states from './states'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

const createStore = () => {
  return new Vuex.Store({
    strict: debug,
    state: states,
    actions,
    getters,
    mutations
  })
}

export default createStore
