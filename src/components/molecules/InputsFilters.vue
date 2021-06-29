<template>
  <div class="container grid-4">
    <b-form-group id="input-group-1" label="Drone ID" label-size="lg" label-for="input-1">
      <b-form-input
        id="input-1"
        type="number"
        placeholder="Example: 1"
        required
        @blur="search()"
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

const FilterDrones = new Filters()
const ConversionsDrones = new Conversions()

const drone = namespace('Drone')
@Component({
  name: 'InputsFilters',
})
/* eslint-disable @typescript-eslint/ban-types */
export default class InputsFilters extends Vue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public option: Array<object> = []

  public droneId = ''

  public name = ''

  public currentyFly = 'Please select an status fly'

  public status = 'Please select an status'

  public optionsFly = [
    { value: 'Please select an status fly', text: 'Please select an status fly', disabled: true },
    { value: 'coming', text: 'Coming', disabled: false },
    { value: 'going', text: 'Going', disabled: false },
  ]

  public optionStatus = [
    { value: 'Please select an status', text: 'Please select an status fly', disabled: true },
  ]

  public searchStatusMerge(): void {
    const statusDrone = FilterDrones.mergeDicesInGet(this.getDronesAll)

    statusDrone.forEach((s: string) => {
      return this.optionStatus.push({ value: s, text: s, disabled: false })
    })
  }

  public search(): void {
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
      this.actioDecisionFilterSearch(true)
      console.log('filter true')
      console.log(this.getDecisionFilterSearch)
    } else {
      this.actioDecisionFilterSearch(false)
      console.log('filter false')
      console.log(this.getDecisionFilterSearch)
    }
    // filters drones
    // filter drone id
    if (
      this.name == null ||
      this.name === undefined ||
      (this.name === '' && this.currentyFly == null) ||
      this.currentyFly === undefined ||
      this.currentyFly === 'Please select an status fly' ||
      (this.currentyFly === '' && this.status == null) ||
      this.status === undefined ||
      this.status === ''
    ) {
      this.actionGetDronesFilter({
        id:
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId),
        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
      console.log(this.getDronesFilterSearch)
    }
    // filter drone name
    else if (
      this.droneId != null ||
      this.droneId !== undefined ||
      (this.droneId !== '' && this.currentyFly == null) ||
      this.currentyFly === undefined ||
      this.currentyFly === 'Please select an status fly' ||
      (this.currentyFly === '' && this.status == null) ||
      this.status === undefined ||
      this.status === ''
    ) {
      this.actionGetDronesFilter({
        nameClient: ConversionsDrones.FirstCapitalLetterinaString(this.name),
        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
      console.log(this.getDronesFilterSearch)
    }
    // filter drone fly
    else if (
      this.droneId != null ||
      this.droneId !== undefined ||
      (this.droneId !== '' && this.name == null) ||
      this.name === undefined ||
      (this.name === '' && this.status == null) ||
      this.status === undefined ||
      this.status === ''
    ) {
      this.actionGetDronesFilter({
        statusVoo: this.currentyFly,
        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
      console.log(this.getDronesFilterSearch)
    }
    // filter drone status
    else if (
      this.droneId != null ||
      this.droneId !== undefined ||
      (this.droneId !== '' && this.name == null) ||
      this.name === undefined ||
      (this.name === '' && this.currentyFly == null) ||
      this.currentyFly === undefined ||
      this.currentyFly === 'Please select an status fly' ||
      this.currentyFly === ''
    ) {
      this.actionGetDronesFilter({
        statusDrone: this.status,
        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
      console.log(this.getDronesFilterSearch)
    }
    // filter drone id and name
    else if (
      this.currentyFly == null ||
      this.currentyFly === undefined ||
      this.currentyFly === 'Please select an status fly' ||
      (this.currentyFly === '' && this.status == null) ||
      this.status === undefined ||
      this.status === ''
    ) {
      this.actionGetDronesFilter({
        id:
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId),
        nameClient: ConversionsDrones.FirstCapitalLetterinaString(this.name),
        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
      console.log(this.getDronesFilterSearch)
    }
    // filter drone id and status
    else if (
      this.name == null ||
      this.name === undefined ||
      (this.name === '' && this.currentyFly == null) ||
      this.currentyFly === undefined ||
      this.currentyFly === '' ||
      this.currentyFly === 'Please select an status fly'
    ) {
      this.actionGetDronesFilter({
        id:
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId),
        statusDrone: this.status,
        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
      console.log(this.getDronesFilterSearch)
    }
    // filter drone id and fly
    else if (
      this.name == null ||
      this.name === undefined ||
      (this.name === '' && this.status == null) ||
      this.status === undefined ||
      this.status === ''
    ) {
      this.actionGetDronesFilter({
        id:
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId),
        statusVoo: this.currentyFly,

        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
      console.log(this.getDronesFilterSearch)
    }
    // filter drone id and name and fly
    else if (this.status == null || this.status === undefined || this.status === '') {
      this.actionGetDronesFilter({
        id:
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId),
        statusVoo: this.currentyFly,
        nameClient: ConversionsDrones.FirstCapitalLetterinaString(this.name),

        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
      console.log(this.getDronesFilterSearch)
    }
    // filter drone id and name and status
    else if (
      this.currentyFly == null ||
      this.currentyFly === undefined ||
      this.currentyFly === '' ||
      this.currentyFly === 'Please select an status fly'
    ) {
      this.actionGetDronesFilter({
        id:
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId),
        statusDrone: this.status,
        nameClient: ConversionsDrones.FirstCapitalLetterinaString(this.name),
        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
      console.log(this.getDronesFilterSearch)
    } else {
      this.actionGetDronesFilter({
        id:
          typeof this.droneId === 'number'
            ? this.droneId
            : ConversionsDrones.StringInNumber(this.droneId),
        statusVoo: this.currentyFly,
        nameClient: ConversionsDrones.FirstCapitalLetterinaString(this.name),
        statusDrone: this.status,
        // eslint-disable-next-line @typescript-eslint/ban-types
        drones: this.getDronesAll,
      })
      console.log('search')
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
  public actionGetDronesFilter!: (decision: {
    id?: number
    statusVoo?: string
    statusDrone?: string
    nameClient?: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    drones: Array<object>
  }) => void

  @drone.Action
  public actioDecisionFilterSearch!: (drones: boolean) => void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async mounted() {
    await this.searchStatusMerge()
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
