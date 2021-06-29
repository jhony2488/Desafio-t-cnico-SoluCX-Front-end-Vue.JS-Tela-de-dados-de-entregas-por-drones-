<template>
  <NotFoundTemplate />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NotFoundTemplate from '../components/templates/NotFound.vue'

@Component({
  name: 'NotFound',
  components: {
    NotFoundTemplate,
  },
})
export default class Home extends Vue {}
</script>
