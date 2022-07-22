<template>
  <div>
    <BtclodHeadVue />
    <BtclodMainVue />
    <BtclodFootVue />
  </div>
</template>
<script>
import BtclodHeadVue from '~/components/BtclodHead.vue'
import BtclodMainVue from '~/components/BtclodMain.vue'
import BtclodFootVue from '~/components/BtclodFoot.vue'
export default {
  name: 'Webapp',
  components: {
    BtclodHeadVue,
    BtclodMainVue,
    BtclodFootVue
  }
}
</script>
