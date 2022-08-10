<template>
  <div>
    <header class="btclodheaderclass">
      <OntivaNavHeadVue />
      <OntivaSearchVue />
    </header>
    <Nuxt />
    <OntivaFootVue />
  </div>
</template>

<script>
import OntivaFootVue from '~/components/OntivaFoot.vue'
import OntivaNavHeadVue from '~/components/OntivaNavHead.vue'
import OntivaSearchVue from '~/components/OntivaSearch.vue'
export default {
  components: {
    OntivaFootVue,
    OntivaSearchVue,
    OntivaNavHeadVue
  }
}
</script>

<style scoped>
.btclodheaderclass{
    width: 100%;
    background-image: url(~/assets/images/header.jpg);
    height: 364px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    }
</style>
