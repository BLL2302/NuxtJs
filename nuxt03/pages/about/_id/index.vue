<template>
  <div>
    <header class="btclodheaderclass">
      <OntivaNavHeadVue />
      <OntivaSearchVue />
    </header>
    <OntivaConvert2 />
  </div>
</template>

<script>
import OntivaNavHeadVue from '~/components/OntivaNavHead.vue'
import OntivaSearchVue from '~/components/OntivaSearch.vue'
import OntivaConvert2 from '~/components/OntivaConvert2.vue'
export default {
  name: 'Head',
  components: {
    OntivaNavHeadVue,
    OntivaSearchVue,
    OntivaConvert2
  },
  layout: 'ontivaView'
}
</script>

<style>
    .btclodheaderclass{
        width: 100%;
        background-image: url(~/assets/images/header.jpg);
        height: 364px;
        background-size: cover;
        display: flex;
        flex-direction: column;
    }
</style>
