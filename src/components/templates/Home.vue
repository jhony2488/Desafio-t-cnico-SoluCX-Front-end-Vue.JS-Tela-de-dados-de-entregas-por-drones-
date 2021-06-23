<template>
  <div class="home">
    <section class="header-section">
      <div class="header-section-wrapper">
        <Inputs />
        <TablesDrones />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Inputs from '../molecules/InputsFilters.vue'
import TablesDrones from '../organisms/TableDrones.vue'

@Component({
  components: {
    Inputs,
    TablesDrones,
  },
})
export default class HomeTemplate extends Vue {}
</script>

<style scoped lang="scss">
.header-section {
  width: 100vw;
  display: grid;
  justify-items: center;
  padding-top: 90px;
  &-wrapper {
    max-width: 1440px;
    width: 100%;
    width: 80vw;
    display: grid;
    justify-items: center;
  }
}
</style>
