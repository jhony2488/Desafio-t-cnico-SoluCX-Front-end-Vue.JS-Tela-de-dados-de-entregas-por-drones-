<template>
  <b-avatar variant="info" :src="src" :size="size"></b-avatar>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component({
  name: 'TableDrones',
})
export default class Inputs extends Vue {
  msg!: string

  @Prop({ type: String }) readonly src: string | undefined

  @Prop({ type: String }) readonly size: string | undefined
}
</script>

<style lang="scss"></style>
