<template>
  <b-avatar
    variant="info"
    :src="src"
    :size="size"
    :aria-label="'drone de ' + name"
    :alt="'drone de ' + name"
  ></b-avatar>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component({
  name: 'ImageDroneOne',
})
export default class Inputs extends Vue {
  msg!: string

  @Prop({ type: String }) readonly src: string | undefined

  @Prop({ type: String }) readonly size: string | undefined

  @Prop({ type: String }) readonly name: string | undefined
}
</script>

<style lang="scss"></style>
