<template>
  <div>
    <div class="singUpclass">
      <NuxtLink to="/" class="ontivalogo">
        <img src="~/assets/images/logo.png" alt="">
      </NuxtLink>
      <div class="inputForm">
        <input v-model="name" type="text" placeholder="Enter your name">
        <input v-model="email" type="text" placeholder="Enter your email">
        <input v-model="password" type="password" placeholder="Enter your password">
        <button @click="signUp">
          Sign Up
        </button>
        <NuxtLink to="login">
          <button>
            Login
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  mounted () {
    const user = localStorage.getItem('user-info')
    if (user) {
      this.$router.push('/')
    }
  },
  methods: {
    signUp () {
      // eslint-disable-next-line no-console
      console.warn('signUp', this.name, this.email, this.password)
      const result = axios.post('http://localhost:3023/users', {
        email: this.email,
        password: this.password,
        name: this.name
      })
      // eslint-disable-next-line no-console
      console.warn(result)
      if (result.status === 201) {
        localStorage.setItem('user-info', JSON.stringify(result.data))
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
.singUpclass{
    width: 300px;
    height: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    background: red;
}
.ontivalogo{
    text-decoration: none;
}
.inputForm{
    display: flex;
    flex-direction: column;
}
</style>
