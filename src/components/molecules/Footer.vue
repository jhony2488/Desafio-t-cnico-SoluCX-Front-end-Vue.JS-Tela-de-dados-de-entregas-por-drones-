<template>
  <div class="footer">
    <p>
      Desafio técnico desenvolvido para avaliação das competências técnicas para a vaga de front end
      Vue na SoluCX. Desenvolvido por
      <a href="https://jhonyaraujo.netlify.app/">Jhonata Vinicius</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Footer',
})
export default class InputsFilters extends Vue {}
</script>

<style lang="scss">
.footer {
  width: 100%;
  background-color: black;
  height: 90px;
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 40px;
  p {
    color: white;
    font-size: 20px;
    width: 80%;
  }
}
</style>
