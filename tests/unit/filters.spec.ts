import { Filters } from '@/utils/filters'
import drones from '../drones'
import dronesPagination1 from '../dronesPagination1'
import dronesPagination2 from '../dronesPagination2'

const filters = new Filters()

describe('Filters', () => {
  it('should solve the problem of duplicate items in an array', () => {
    const merge = filters.mergeDicesInGet(dronesPagination1)
    expect(merge).toEqual(['flying'])
  })
  it('should perform the pagination returning the first 5 items of the array', () => {
    expect(filters.filterPaginationDrone(drones, 1, 5).drones).toStrictEqual(dronesPagination1)
  })
  it('should perform the pagination returning the first 5 items, which are after the first 5 items of the array', () => {
    expect(filters.filterPaginationDrone(drones, 2, 5).drones).toStrictEqual(dronesPagination2)
  })
})
