<template>
  <main class="one-drone">
    <OneDroneContent />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OneDroneContent from '../organisms/OneDroneContent.vue'

@Component({
  name: 'OneDroneTemplate',
  components: {
    OneDroneContent,
  },
})
export default class InputsFilters extends Vue {}
</script>

<style lang="scss"></style>
