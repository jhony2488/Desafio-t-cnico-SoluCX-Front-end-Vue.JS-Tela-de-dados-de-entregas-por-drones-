/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import Vuex from 'vuex'
import Vue from 'vue'
import { Filters } from '../utils/filters'

Vue.use(Vuex)

const FilterDrones = new Filters()

export default new Vuex.Store({
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
    getDronesFilter(state, dronesFilter) {
      const dronesFilterSearch = FilterDrones.filterDrones(state, dronesFilter)
      state.dronesFilterSearch = dronesFilterSearch
    },
    getDroneWithDrones(state, drone) {
      const droneOne = FilterDrones.filterOneDrone(state.drones, drone)
      state.drone = droneOne
    },
    getDrone(state, drone) {
      state.drone = drone
    },
  },
  actions: {
    async actionDrones({ commit }, { drones }) {
      commit('getDrones', drones)
    },
    async actionGetDronesFilter({ commit }, { dronesFilter }) {
      commit('getDronesFilter', dronesFilter)
    },
    async actionGetDroneWithDrones({ commit }, { drone }) {
      commit('getDroneWithDrones', drone)
    },
    async actionOneDrone({ commit }, { drone }) {
      commit('getTagsFilterUnic', drone)
    },
  },
})
