<template>
  <div>
    <div class="loginclass">
      <NuxtLink to="/" class="ontivalogo">
        <img src="~/assets/images/logo.png" alt="">
      </NuxtLink>
      <div class="inputForm">
        <input v-model="email" type="text" placeholder="Enter your email">
        <input v-model="password" type="password" placeholder="Enter your password">
        <button @click="login">
          Log in
        </button>
        <NuxtLink to="signUp">
          <button>Sign UP</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const result = await axios.get(`http://localhost:3023/users?email=${this.email}&password=${this.password}`)
      if (result.status === 200 && result.data.lenght > 0) {
        localStorage.setItem('user-info', JSON.stringify(result.data))
        this.$router.push({ name: 'todos' })
      }
    }
  }
}
</script>
<style>
.loginclass{
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
