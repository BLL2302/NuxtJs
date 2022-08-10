<template>
  <div class="autocomplete">
    <input
      v-model="search"
      type="text"
      @input="onChange"
    >
    <ul
      class="autocomplete-results"
    >
      <li
        class="autocomplete-result"
      >
        (result)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchAutocomplete',
  data () {
    return {
      search: '',
      items: [
        'Apple',
        'Banana',
        'Orange',
        'Mango',
        'Pear',
        'Peach',
        'Grape',
        'Tangerine',
        'Pineapple'
      ]
    }
  },
  methods: {
    onChange () {

    }
  }
}
</script>
<style scoped>
  .autocomplete {
    position: relative;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    min-height: 1em;
    max-height: 6em;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>
