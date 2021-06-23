/* eslint-disable */

interface dronesInterface {
  id: number
  name: string
  status: string
  fly: number
}

class Filters {
  filterDrones(state: any, dronesFilter: any) {
    const dronesFilterSearch = state.drones.filter((d: dronesInterface) => {
      if (
        dronesFilter.id &&
        !dronesFilter.statusVoo &&
        !dronesFilter.statusDrone &&
        !dronesFilter.nameClient
      ) {
        return d.id == dronesFilter.id
      }
      if (
        !dronesFilter.id &&
        dronesFilter.statusVoo &&
        !dronesFilter.statusDrone &&
        !dronesFilter.nameClient
      ) {
        return d.fly == dronesFilter.fly
      }
      if (
        !dronesFilter.id &&
        !dronesFilter.statusVoo &&
        !dronesFilter.statusDrone &&
        dronesFilter.nameClient
      ) {
        return d.name == dronesFilter.nameClient
      }
      if (
        !dronesFilter.id &&
        !dronesFilter.statusVoo &&
        dronesFilter.statusDrone &&
        !dronesFilter.nameClient
      ) {
        return d.status == dronesFilter.status
      }
      if (
        dronesFilter.id &&
        dronesFilter.statusVoo &&
        !dronesFilter.statusDrone &&
        !dronesFilter.nameClient
      ) {
        return d.fly == dronesFilter.fly && d.id == dronesFilter.id
      }
      if (
        dronesFilter.id &&
        !dronesFilter.statusVoo &&
        dronesFilter.statusDrone &&
        !dronesFilter.nameClient
      ) {
        return d.status == dronesFilter.status && d.id == dronesFilter.id
      }
      if (
        dronesFilter.id &&
        !dronesFilter.statusVoo &&
        !dronesFilter.statusDrone &&
        dronesFilter.nameClient
      ) {
        return d.name == dronesFilter.nameClient && d.id == dronesFilter.id
      }
      if (
        dronesFilter.id &&
        dronesFilter.statusVoo &&
        dronesFilter.statusDrone &&
        !dronesFilter.nameClient
      ) {
        return (
          d.fly == dronesFilter.fly && d.id == dronesFilter.id && d.status == dronesFilter.status
        )
      }
      if (
        dronesFilter.id &&
        dronesFilter.statusVoo &&
        !dronesFilter.statusDrone &&
        dronesFilter.nameClient
      ) {
        return (
          d.fly == dronesFilter.fly && d.id == dronesFilter.id && d.name == dronesFilter.nameClient
        )
      }
      if (
        dronesFilter.id &&
        dronesFilter.statusVoo &&
        dronesFilter.statusDrone &&
        dronesFilter.nameClient
      ) {
        return (
          d.fly == dronesFilter.fly &&
          d.id == dronesFilter.id &&
          d.name == dronesFilter.nameClient &&
          d.status == dronesFilter.status
        )
      }

      return 0
    })
    return dronesFilterSearch
  }

  async mergeDicesInGet(tools: any[]) {
    const getDicesConfig = [...new Set(tools)]
    return getDicesConfig
  }

  async filterOneDrone(drones: any[], droneId: number) {
    const drone = await drones.find((d: dronesInterface) => {
      return d.id == droneId
    })
    return drone
  }
}

export { Filters }
