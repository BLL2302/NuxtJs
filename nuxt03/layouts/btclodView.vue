<template>
  <div>
    <BtclodHeadVue />
    <Nuxt />
    <BtclodFootVue />
  </div>
</template>

<script>
import BtclodFootVue from '~/components/BtclodFoot.vue'
import BtclodHeadVue from '~/components/BtclodHead.vue'
export default {
  components: {
    BtclodFootVue,
    BtclodHeadVue
  }
}
</script>
