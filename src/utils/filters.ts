/* eslint-disable */

interface dronesInterface {
  id: number
  name: string
  status: string
  fly: number
}

class Filters {
  mergeDicesInGet(merge: any[]) {
    const getStatus = merge.map((m) => {
      return m.status
    })
    const getDicesConfig = [...new Set(getStatus)]
    return getDicesConfig
  }

  async filterOneDrone(drones: any[], droneId: number) {
    const drone = await drones.find((d: dronesInterface) => {
      return d.id == droneId
    })
    return drone
  }
  filterPaginationDrone(drones: object[],currentPage: number = 1,  pageSize: number = 20) {
    const AllItems: number = drones.length
    const maxPages = Math.round(drones.length / pageSize)
    // calculate total pages
    let allPages = Math.ceil(AllItems / pageSize)

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1
    } else if (currentPage > allPages) {
      currentPage = allPages
    }

    let startPage: number, endPage: number
    if (allPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1
      endPage = allPages
    } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1
        endPage = maxPages
      } else if (currentPage + maxPagesAfterCurrentPage >= allPages) {
        // current page near the end
        startPage = allPages - maxPages + 1
        endPage = allPages
      } else {
        // current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage
        endPage = currentPage + maxPagesAfterCurrentPage
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize
    let endIndex = Math.min(startIndex + pageSize - 1, AllItems - 1)

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i)

    let contentItems: Array<object> = []
    if (currentPage == 1) {
      contentItems = drones.slice(0, pageSize)
    } else {
      const pageCall = currentPage - 1
      contentItems = drones.slice(pageSize * pageCall, pageSize + pageSize * pageCall)
    }
    // return object with all pager properties required by the view
    return {
      AllItems,
      currentPage,
      pageSize,
      allPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
      drones: contentItems,
    }
  }
}

export { Filters }
