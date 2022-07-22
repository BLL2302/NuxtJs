<template>
  <div>
    <OntivaHeadVue />
    <OntivaMainVue class="m-5" />
    <OntivaFootVue />
  </div>
</template>
<script>
import OntivaHeadVue from '~/components/OntivaHead.vue'
import OntivaMainVue from '~/components/OntivaMain.vue'
import OntivaFootVue from '~/components/OntivaFoot.vue'
export default {
  name: 'OntivaApp',
  components: {
    OntivaHeadVue,
    OntivaMainVue,
    OntivaFootVue
  },
  asyncData () {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
}
</script>
