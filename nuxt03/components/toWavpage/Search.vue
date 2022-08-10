<template>
  <div>
    <input
      v-model="keyword"
      type="text"
      placeholder="Search or paste link here"
      class="searchbar"
      @input="getData()"
    >
    <button class="search-btn d-flex justify-content-center" @click="addCache()">
      START NOW
      <ion-icon
        name="arrow-forward-outline"
        style="height: 22px;
        width: 30px;"
      />
    </button>
    <div class="position-absolute top-100 scrollclass" style="width:90%">
      <div v-for="searchkey in filteredItems" :key="searchkey" class="suggestSearch">
        {{ searchkey }}
      </div>
      <div v-for="sSearch in suggestSearch" :key="sSearch" class="suggestSearch">
        {{ sSearch[0] }}
      </div>
    </div>
  </div>
</template>

<script>
import { jsonp } from 'vue-jsonp'
export default {
  data () {
    return {
      keyword: '',
      suggestSearch: [],
      isOpen: false
    }
  },
  computed: {
    filteredItems () {
      return this.$store.state.searchCache.filter((searchkey) => {
        return searchkey.toLowerCase().includes(this.keyword.toLowerCase())
      })
    }
  },
  methods: {
    async getData () {
      try {
        const res = await jsonp('http://suggestqueries.google.com/complete/search?callback=?',
          {
            hl: 'en', // Language
            ds: 'yt', // Restrict lookup to youtube
            // jsonp: 'suggestCallBack', // jsonp callback function name
            q: this.keyword, // query term
            client: 'youtube' // force youtube style response, i.e. jsonp
          })
        this.suggestSearch = res[1].slice(0, 10)
        // eslint-disable-next-line no-console
        console.log(res)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
    addCache () {
      this.$store.dispatch('addCache', this.keyword)
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
    .suggestSearch{
        background-image: linear-gradient(to right, rgb(144, 52, 141), rgb(13, 106, 107));
        margin: 6px 30px;
        padding: 8px 30px;
        width: 100%;
        border-bottom:  1px solid white;
        color: white;
    }
    .scrollclass{
        overflow: auto;
        height: 250px;
    }
</style>
