/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-extraneous-dependencies */
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { Filters } from '../../utils/filters'

const FilterDrones = new Filters()

@Module({ namespaced: true })
class Drone extends VuexModule {
  public drones: Array<object> = []

  public dronesFilterSearch: Array<object> = []

  public dronesFilterPagination: Array<object> = []

  public drone: object = {}

  public filterSearch = false

  get getDronesAll() {
    return this.drones
  }

  get getDronesFilterSearch() {
    return this.dronesFilterSearch
  }

  get getDronesFilterPagination() {
    return this.dronesFilterPagination
  }

  get getdrone() {
    return this.drone
  }

  get getDecisionFilterSearch() {
    return this.filterSearch
  }

  @Mutation
  public getDrones(drones: Array<object>) {
    this.drones = drones
  }

  @Mutation
  public getDronesFilter(dronesFilter: Array<object>): void {
    this.dronesFilterSearch = dronesFilter
  }

  @Mutation
  public getDronesPagination(drones: {
    dronesPagination: object[]
    page: number | undefined
    drones: object[]
  }) {
    const pagination = FilterDrones.filterPaginationDrone(drones.drones, drones.page, 20)
    const dronesFilterPagination = pagination.drones

    this.dronesFilterPagination = dronesFilterPagination
  }

  @Mutation
  public getDroneWithDrones(drone: number): void {
    const droneOne = FilterDrones.filterOneDrone(this.drones, drone)
    this.drone = droneOne
  }

  @Mutation
  public getDrone(drone: object) {
    this.drone = drone
  }

  @Mutation
  public getDecisionMutationFilterSearch(decision: boolean) {
    this.filterSearch = decision
  }

  @Action
  async actionDrones(drones: Array<object>) {
    this.context.commit('getDrones', drones)
  }

  @Action
  async actionGetDronesFilter(dronesFilter: Array<object>) {
    this.context.commit('getDronesFilter', dronesFilter)
  }

  @Action
  async actionGetDronesPagination(drones: {
    dronesPagination: object[]
    page: number | undefined
    drones: object[]
  }) {
    this.context.commit('getDronesPagination', drones)
  }

  @Action
  async actionGetDroneWithDrones(drone: object) {
    this.context.commit('getDroneWithDrones', drone)
  }

  @Action
  async actionOneDrone(drone: object) {
    this.context.commit('getDrone', drone)
  }

  @Action
  async actioDecisionFilterSearch(decision: boolean) {
    this.context.commit('getDecisionMutationFilterSearch', decision)
  }
}
export default Drone
