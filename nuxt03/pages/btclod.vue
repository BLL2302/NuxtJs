<template>
  <div>
    <BtclodMainVue />
  </div>
</template>
<script>
import BtclodMainVue from '~/components/BtclodMain.vue'
export default {
  name: 'Webapp',
  components: {
    BtclodMainVue
  },
  layout: 'btclodView',
  asyncData () {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
}
</script>
