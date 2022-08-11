import axios from 'axios'

export const state = () => ({
  searchCache: [],
  token: null,
  user: [
    {
      id: 1,
      avatar: 'https://m.media-amazon.com/images/I/81oD3Oj2TSL._SL1300_.jpg',
      token: null,
      email: '',
      profile: 'profile',
      setting: 'setting'
    }
  ],
  storageToken: []
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
  },
  saveToken (state, token) {
    state.storageToken.push(token)
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
        vuexContext.commit('saveToken', result.data.idToken)
        resolve({ success: true })
        // eslint-disable-next-line prefer-promise-reject-errors
      }).catch(e => reject({ success: false }))
    })
  },
  logout (state) {
    state.token = null
  },
  async increaseCounter (state) {
    const res = await axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    state.counter = res
  }
}
