import Vue from 'vue'
import Vuex from 'vuex'

import header_store from './header'
import home_store from './home'
import all_store from './all'
import topic_store from './topic'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    header_store,
    home_store,
    all_store,
    topic_store,
  }
})
