import axios from 'axios'

export const state = () => ({
  searchCache: [],
  counter: 0
})

export const getters = {
  getCache (state) {
    return state.searchCache
  },
  getCounter (state) {
    return state.counter
  }
}

export const mutations = {
  increment (state) {
    state.counter++
  },
  addCache (state, newkeyword) {
    state.searchCache = state.searchCache.push(newkeyword)
  },
  decreaseCounter (state) {
    state.counter--
  },
  increaseCounter (state, randomNumber) {
    state.counter += randomNumber
  }
}

export const actions = {
  addCache (vuexContext, newkeyword) {
    vuexContext.commit('addCache', newkeyword)
  },
  // eslint-disable-next-line require-await
  async fetchCounter (state) {
    // make request
    const res = { data: 10 }
    state.counter = res.data
    return res.data
  },
  async increaseCounter (state) {
    const res = await axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    state.counter = res
  }
}
