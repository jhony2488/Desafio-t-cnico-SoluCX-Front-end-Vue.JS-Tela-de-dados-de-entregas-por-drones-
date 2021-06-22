/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */

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
    const getTools = await tools.map((tool: { TagTool: any[] }) => {
      return tool.TagTool.map(
        (item: {
          id: any
          title: any
          link: any
          description: any
          createdAt: any
          updatedAt: any
        }) => {
          return {
            id: item.id,
            title: item.title,
            link: item.link,
            description: item.description,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          }
        }
      )
    })

    let getToolsConfig = await getTools.reduce(
      (list: string | any[], sub: any) => list.concat(sub),
      []
    )
    getToolsConfig = await getToolsConfig.filter((item: any) => {
      return !this[JSON.stringify(item)] && (this[JSON.stringify(item)] = true)
    }, Object.create(null))

    return getToolsConfig
  }
}

export { Filters }
