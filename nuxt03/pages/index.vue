<template>
  <div>
    <OntivaHeadVue />
    <OntivaMainVue class="m-5" />
  </div>
</template>
<script>
import OntivaHeadVue from '~/components/OntivaHead.vue'
import OntivaMainVue from '~/components/OntivaMain.vue'
export default {
  name: 'OntivaApp',
  components: {
    OntivaHeadVue,
    OntivaMainVue
  },
  layout: 'ontivaView',
  asyncData () {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
}
</script>
