<template>
  <div>
    <input type="text" placeholder="Search or paste link here" class="searchbar">
    <button class="search-btn d-flex justify-content-center" @click="getData()">
      START NOW
      <ion-icon
        name="arrow-forward-outline"
        style="height: 22px;
        width: 30px;"
      />
    </button>
    <div class="suggestSearch">
      {{ sugguestSearch }}
    </div>
  </div>
</template>

<script>
import { jsonp } from 'vue-jsonp'
export default {
  asyncdata () {
    return {
      suggestSearch: []
    }
  },
  methods: {
    async getData () {
      const { suggestSearch } = await jsonp('http://suggestqueries.google.com/complete/search?callback=?')
      this.suggestSearch = suggestSearch
    }
  }
}
</script>

<style scoped>
    .searchbar{
        flex: 1 1 auto;
        outline: none;
        border: none;
    }
    .search-btn{
    position: absolute;
    right: 2%;
    border-radius: 28px;
    padding: 8px 16px;
    border: none;
    background:#ce4a4a;
    color: white;
    text-align: left;
    }
</style>
