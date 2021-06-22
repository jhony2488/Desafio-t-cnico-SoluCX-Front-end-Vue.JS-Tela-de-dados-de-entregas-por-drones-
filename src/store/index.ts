/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import { createStore } from 'vuex'
import { Filters } from '../utils/filters'

const FilterDrones = new Filters()

export default createStore({
  state: {
    drones: [],
    dronesFilterSearch: [],
    drone: {},
  },
  getters: {
    drones(state) {
      return state.drones
    },
    dronesFilterSearch(state) {
      return state.dronesFilterSearch
    },
    drone(state) {
      return state.drone
    },
  },
  mutations: {
    getDrones(state, drones) {
      state.drones = drones
    },
    getTagsFilter(state, dronesFilter) {
      const dronesFilterSearch = FilterDrones.filterDrones(state, dronesFilter)
      state.dronesFilterSearch = dronesFilterSearch
    },
    getDrone(state, drone) {
      state.drone = drone
    },
  },
  actions: {
    async actionDrones({ commit }, { drones }) {
      commit('getDrones', drones)
    },
    async actionTagsUserFilter({ commit }, { dronesFilter }) {
      commit('getTagsFilter', dronesFilter)
    },
    async actionOneDrone({ commit }, { drone }) {
      commit('getTagsFilterUnic', drone)
    },
  },
})
