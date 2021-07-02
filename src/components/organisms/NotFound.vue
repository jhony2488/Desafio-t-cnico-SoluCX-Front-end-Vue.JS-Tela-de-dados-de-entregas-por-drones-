<template>
  <section class="not-found" role="not found page">
    <div class="not-found-wrapper">
      <p class="err">Error <span>404</span></p>
      <p>Page Not Found</p>
      <router-link to="/">Return Home</router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'NotFoundContent',
})
export default class OneDriveContent extends Vue {}
</script>

<style scoped lang="scss">
.not-found {
  width: 100vw;
  height: 100vh;
  font-size: 28px;
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  .err {
    font-size: 56px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    span {
      color: red;
    }
  }
}
</style>
