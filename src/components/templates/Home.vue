<template>
  <div class="home">
    <section class="header-section">
      <div class="header-section-wrapper">
        <Inputs />
      </div>
    </section>
    <main class="home-content-drones">
      <div class="home-content-drones-wrapper">
        <TablesDrones />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Inputs from '../molecules/InputsFilters.vue'
import TablesDrones from '../organisms/TableDrones.vue'
import Footer from '../molecules/Footer.vue'

@Component({
  name: 'HomeTemplate',
  components: {
    Inputs,
    TablesDrones,
    Footer,
  },
})
export default class HomeTemplate extends Vue {}
</script>

<style scoped lang="scss">
.header-section,
.home-content-drones {
  width: 100vw;
  display: grid;
  justify-items: center;
  padding-top: 50px;
  &-wrapper {
    max-width: 1440px;
    width: 100%;
    width: 80vw;
    display: grid;
    justify-items: center;
  }
}
.header-section {
  padding-top: 90px;
}
</style>
