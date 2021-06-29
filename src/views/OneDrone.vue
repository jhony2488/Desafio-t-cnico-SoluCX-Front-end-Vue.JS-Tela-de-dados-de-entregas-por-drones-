<template>
  <OneDroneTemplate />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OneDroneTemplate from '../components/templates/OneDrone.vue'

@Component({
  name: 'OneDrone',
  components: {
    OneDroneTemplate,
  },
})
export default class OneDrone extends Vue {}
</script>
