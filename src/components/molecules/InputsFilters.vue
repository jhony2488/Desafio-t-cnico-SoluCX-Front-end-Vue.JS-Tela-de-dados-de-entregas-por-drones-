<template>
  <div class="container grid-4" role="search inputs">
    <b-form-group id="input-group-1" label="Drone ID" label-size="lg" label-for="input-1">
      <b-form-input
        id="input-1"
        type="number"
        placeholder="Example: 1"
        required
        @blur="search()"
        aria-describedby="input of search drones per id"
        v-model="droneId"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Name" label-size="lg" label-for="input-2">
      <b-form-input
        id="input-2"
        type="text"
        placeholder="Your Name"
        required
        @blur="search()"
        aria-describedby="input of search drones per name"
        v-model="name"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label-size="lg" label="Currenty Fly" label-for="input-3">
      <b-form-select
        id="input-3"
        required
        size="lg"
        :options="optionsFly"
        @blur="search()"
        @change="search()"
        v-model="currentyFly"
        aria-describedby="input of search drones per status fly"
      >
      </b-form-select>
    </b-form-group>
    <b-form-group id="input-group-4" label-size="lg" label="Status" label-for="input-4">
      <b-form-select
        id="input-4"
        required
        size="lg"
        :options="optionStatus"
        @blur="search()"
        @change="search()"
        aria-describedby="input of search drones per status of drone"
        v-model="status"
      >
      </b-form-select>
    </b-form-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Filters } from '@/utils/filters'
import { Conversions } from '@/utils/conversions'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const filter = require('array.filter')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const find = require('object-array-filter')

const FilterDrones = new Filters()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ConversionsDrones = new Conversions()

const drone = namespace('Drone')
@Component({
  name: 'InputsFilters',
})
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default class InputsFilters extends Vue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public option: Array<object> = []

  public droneId = ''

  public name = ''

  public currentyFly = ''

  public status = ''

  public optionsFly = [
    { value: '', text: 'Please select an status fly', disabled: false },
    { value: 'coming', text: 'Coming', disabled: false },
    { value: 'going', text: 'Going', disabled: false },
  ]

  public optionStatus = [{ value: '', text: 'Please select an status fly', disabled: false }]

  public searchStatusMerge(): void {
    setInterval(() => {
      if (this.optionStatus.length === 1) {
        const statusDrone = FilterDrones.mergeDicesInGet(this.getDronesAll)

        statusDrone.forEach((s: string) => {
          return this.optionStatus.push({ value: s, text: s, disabled: false })
        })
      }
    }, 2000)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async search() {
    if (
      this.droneId != null ||
      this.droneId !== undefined ||
      this.droneId !== '' ||
      this.name != null ||
      this.name !== undefined ||
      this.name !== '' ||
      this.currentyFly != null ||
      this.currentyFly !== undefined ||
      this.currentyFly !== 'Please select an status fly' ||
      this.currentyFly !== '' ||
      this.status != null ||
      this.status !== undefined ||
      this.status !== ''
    ) {
      await this.actioDecisionFilterSearch(true)
      console.log('filter true')
      console.log(this.getDecisionFilterSearch)
    }
    if (this.droneId === '' && this.name === '' && this.currentyFly === '' && this.status === '') {
      await this.actioDecisionFilterSearch(false)
      console.log('filter false')
      console.log(this.getDecisionFilterSearch)
    }
    if (this.currentyFly === 'Please select an status fly') {
      await this.actioDecisionFilterSearch(false)
      console.log('filter false fly')
      console.log(this.getDecisionFilterSearch)
    }
    if (this.status === 'Please select an status') {
      await this.actioDecisionFilterSearch(false)
      console.log('filter false fly')
      console.log(this.getDecisionFilterSearch)
    }
    // filters drones
    // filter drone id
    if (this.name === '' && this.currentyFly === '' && this.status === '') {
      const searchFilter = await find.default(
        {
          id:
            typeof this.droneId === 'number'
              ? this.droneId
              : ConversionsDrones.StringInNumber(this.droneId),
        },
        this.getDronesAll
      )
      const SearchFilterResolve = searchFilter

      await this.actionGetDronesFilter(SearchFilterResolve)

      console.log('search id')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    }
    // filter drone name
    else if (this.droneId === '' && this.currentyFly === '' && this.status === '') {
      const searchFilter = await find.default(
        {
          name: ConversionsDrones.FirstCapitalLetterinaString(this.name),
        },
        this.getDronesAll
      )

      const SearchFilterResolve = searchFilter
      await this.actionGetDronesFilter(SearchFilterResolve)
      console.log('search name')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    }
    // filter drone fly
    else if (this.droneId === '' && this.name === '' && this.status === '') {
      // eslint-disable-next-line no-shadow
      const searchFilter = await this.getDronesAll.filter((drone: any) => {
        if (this.currentyFly === 'going') {
          return drone.fly >= 1 && drone.fly <= 50
        }
        return drone.fly > 50 && drone.fly <= 100
      })

      const SearchFilterResolve = searchFilter
      await this.actionGetDronesFilter(SearchFilterResolve)
      console.log('search fly')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    }
    // filter drone status
    else if (this.droneId === '' && this.name === '' && this.currentyFly === '') {
      const searchFilter = await find.default(
        {
          status: this.status,
        },
        this.getDronesAll
      )

      const SearchFilterResolve = searchFilter
      await this.actionGetDronesFilter(SearchFilterResolve)
      console.log('search name')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    }

    // filter drone id and name
    else if (this.currentyFly === '' && this.status === '') {
      const searchFilter = await filter(
        {
          id:
            typeof this.droneId === 'number'
              ? this.droneId
              : ConversionsDrones.StringInNumber(this.droneId),
          name: ConversionsDrones.FirstCapitalLetterinaString(this.name),
        },
        this.getDronesAll
      )

      const SearchFilterResolve = searchFilter
      await this.actionGetDronesFilter(SearchFilterResolve)
      console.log('search id and name')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    }
    // filter drone id and status
    else if (this.name === '' && this.currentyFly === '') {
      const searchFilter = await filter(
        {
          id:
            typeof this.droneId === 'number'
              ? this.droneId
              : ConversionsDrones.StringInNumber(this.droneId),
          status: this.status,
        },
        this.getDronesAll
      )

      const SearchFilterResolve = searchFilter
      await this.actionGetDronesFilter(SearchFilterResolve)
      console.log('search id and status')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    }
    // filter drone id and fly
    else if (this.name === '' && this.status === '') {
      // eslint-disable-next-line no-shadow
      const searchFilter = await this.getDronesAll.filter((drone: any) => {
        const id =
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId)
        if (this.currentyFly === 'going') {
          return drone.fly >= 1 && drone.fly <= 50 && drone.id === id
        }
        return drone.fly > 50 && drone.fly <= 100 && drone.id === id
      })

      const SearchFilterResolve = searchFilter
      await this.actionGetDronesFilter(SearchFilterResolve)
      console.log('search id and fly')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    }
    // filter drone id and name and fly
    else if (this.status === '') {
      // eslint-disable-next-line no-shadow
      const searchFilter = await this.getDronesAll.filter((drone: any) => {
        const id =
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId)
        if (this.currentyFly === 'going') {
          return (
            drone.fly >= 1 &&
            drone.fly <= 50 &&
            drone.id === id &&
            drone.name === ConversionsDrones.FirstCapitalLetterinaString(this.name)
          )
        }
        return (
          drone.fly > 50 &&
          drone.fly <= 100 &&
          drone.id === id &&
          drone.name === ConversionsDrones.FirstCapitalLetterinaString(this.name)
        )
      })

      const SearchFilterResolve = searchFilter
      await this.actionGetDronesFilter(SearchFilterResolve)
      console.log('search id and fly and name')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    }
    // filter drone id and name and status
    else if (this.currentyFly === '') {
      // eslint-disable-next-line no-shadow
      const searchFilter = await this.getDronesAll.filter((drone: any) => {
        const id =
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId)
        return (
          drone.status === this.status &&
          drone.id === id &&
          drone.name === ConversionsDrones.FirstCapitalLetterinaString(this.name)
        )
      })

      const SearchFilterResolve = searchFilter
      await this.actionGetDronesFilter(SearchFilterResolve)
      console.log('search id and name and status')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    } else {
      // eslint-disable-next-line no-shadow
      const searchFilter = await this.getDronesAll.filter((drone: any) => {
        const id =
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId)
        if (this.currentyFly === 'going') {
          return (
            drone.status === this.status &&
            drone.fly >= 1 &&
            drone.fly <= 50 &&
            drone.id === id &&
            drone.name === ConversionsDrones.FirstCapitalLetterinaString(this.name)
          )
        }
        return (
          drone.status === this.status &&
          drone.fly > 50 &&
          drone.fly <= 100 &&
          drone.id === id &&
          drone.name === ConversionsDrones.FirstCapitalLetterinaString(this.name)
        )
      })

      const SearchFilterResolve = searchFilter
      await this.actionGetDronesFilter(SearchFilterResolve)
      console.log('search id and fly and name and status')
      console.log(SearchFilterResolve)
      console.log(this.getDronesFilterSearch)
    }
  }

  @drone.Getter
  public getDecisionFilterSearch!: boolean

  @drone.Getter
  public getDronesFilterSearch!: Array<object>

  @drone.Getter
  public getDronesAll!: Array<object>

  @drone.Action
  public actionGetDronesFilter!: (dronesFilter: Array<object>) => void

  @drone.Action
  public actioDecisionFilterSearch!: (drones: boolean) => void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.searchStatusMerge()
  }
}
</script>

<style lang="scss">
.grid-4 {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
}
.width-100 {
  width: 100%;
  height: 30px !important;
}
#input-2 {
  width: 320px;
}
#input-1,
#input-3,
#input-4 {
  width: 200px;
}
#input-1,
#input-2,
#input-3,
#input-4 {
  border-radius: 10px;
  height: 40px;
}
@media (min-width: 300px) and (max-width: 1400px) {
  #input-1,
  #input-2,
  #input-3,
  #input-4 {
    width: 100%;
  }
  .grid-4 {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
}
@media (min-width: 300px) and (max-width: 374px) {
  #input-group-1,
  #input-group-2,
  #input-group-3,
  #input-group-4 {
    width: 200px;
    margin-left: -12px;
  }
  .grid-4 {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
}
</style>
