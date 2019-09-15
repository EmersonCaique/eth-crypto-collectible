import vue from 'vue'
import vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'


vue.use(vuex)

export default new vuex.Store({
    state,
    getters,
    mutations,
    actions
})