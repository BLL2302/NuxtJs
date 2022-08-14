<template>
  <div>
    <OntivaAuthVue />
    <Nuxt />
  </div>
</template>

<script>
import OntivaAuthVue from '~/components/OntivaAuth.vue'
export default {
  components: {
    OntivaAuthVue
  }
}
</script>
<style>
body{
  background: floralwhite;
}
</style>
