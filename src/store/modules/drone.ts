/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-extraneous-dependencies */
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { Filters } from '../../utils/filters'

const FilterDrones = new Filters()

@Module({ namespaced: true, name: 'drone' })
class Drone extends VuexModule {
  public name = ''

  public drones: Array<object> = []

  public dronesFilterSearch: Array<object> = []

  public dronesFilterPagination: Array<object> = []

  public drone: object = {}

  get getdrones() {
    return this.drones
  }

  get getdronesFilterSearch() {
    return this.dronesFilterSearch
  }

  get getdrone() {
    return this.drone
  }

  @Mutation
  public setName(newName: string): void {
    this.name = newName
  }

  @Mutation
  public getDrones(drones: Array<object>) {
    this.drones = drones
  }

  @Mutation
  public getDronesFilter(dronesFilter: Array<object>): void {
    const dronesFilterSearch = FilterDrones.filterDrones(this, dronesFilter)
    this.dronesFilterSearch = dronesFilterSearch
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

  @Action
  public updateName(newName: string): void {
    this.context.commit('setName', newName)
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
  async actionGetDroneWithDrones(drone: object) {
    this.context.commit('getDroneWithDrones', drone)
  }

  @Action
  async actionOneDrone(drone: object) {
    this.context.commit('getTagsFilterUnic', drone)
  }
}
export default Drone
