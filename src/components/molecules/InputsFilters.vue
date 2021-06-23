<template>
  <div class="container grid-4">
    <b-form-group id="input-group-1" label="Drone ID" label-size="lg" label-for="input-1">
      <b-form-input id="input-1" type="number" placeholder="Example: 1" required></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Name" label-size="lg" label-for="input-2">
      <b-form-input id="input-2" type="text" placeholder="Your Name" required></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label-size="lg" label="Currenty Fly" label-for="input-3">
      <b-form-select
        id="input-3"
        required
        size="lg"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
      >
        <template #first>
          <b-form-select-option class="width-100" :value="null" disabled
            >-- Please select an option --</b-form-select-option
          >
        </template>
      </b-form-select>
    </b-form-group>
    <b-form-group id="input-group-4" label-size="lg" label="Status" label-for="input-4">
      <b-form-select
        id="input-4"
        required
        size="lg"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
      >
        <template #first>
          <b-form-select-option class="width-100" :value="null" disabled
            >-- Please select an option --</b-form-select-option
          >
        </template>
      </b-form-select>
    </b-form-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'InputsFilters',
})
export default class InputsFilters extends Vue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public option: Array<object> = []

  public droneId = null

  public name = null

  public currentyFly = null

  public status = null
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
