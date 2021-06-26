import Vuex from 'vuex'
import Vue from 'vue'
import Drone from '@/store/modules/drone'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Drone,
  },
})
