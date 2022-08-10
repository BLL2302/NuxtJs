import axios from 'axios'

export const state = () => ({
  searchCache: [],
  token: null
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
  addCache (state, newkeyword) {
    state.searchCache.push(newkeyword)
  },
  setToken (state, token) {
    state.token = token
  }
}

export const actions = {
  addCache (vuexContext, newkeyword) {
    vuexContext.commit('addCache', newkeyword)
  },
  authenticaterUser (vuexContext, credentials) {
    return new Promise((resolve, reject) => {
      // check login or register
      let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
      if (!credentials.isLogin) {
        authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
      }
      axios.post(authUrlApi, {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true
      }
      ).then((result) => {
      // eslint-disable-next-line no-console
        console.log(result)
        vuexContext.commit('setToken', result.data.idToken)
        resolve({ success: true })
        // eslint-disable-next-line prefer-promise-reject-errors
      }).catch(e => reject({ success: false }))
    })
  },
  async increaseCounter (state) {
    const res = await axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    state.counter = res
  }
}
