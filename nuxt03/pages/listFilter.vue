<template>
  <div id="app">
    <input v-model="search" type="text">
    <div v-for="item in filteredItems" :key="item.name">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  el: '#app',

  data () {
    return {
      search: '',
      items: [
        { name: 'Stackoverflow', type: 'development' },
        { name: 'Game of Thrones', type: 'serie' },
        { name: 'Jon Snow', type: 'actor' }
      ]
    }
  },

  computed: {
    filteredItems () {
      return this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }

}

</script>
