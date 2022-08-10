<template>
  <section class="registerClass">
    <div class="card card-form">
      <h2>Log In</h2>
      <div class="card-body">
        <form @submit.prevent="onSubmit">
          <div class="form_group">
            <label for="email">
              email
            </label>
            <input id="email" v-model="email" type="text" placeholder="type your email">
          </div>
          <div class="form_group">
            <label for="password">
              password
            </label>
            <input id="password" v-model="password" type="password" placeholder="type your password">
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn-success btn-submit">
              Log in
            </button>
          </div>
        </form>
      </div>
      <div class="toLogin">
        <span>
          dont have an account? <NuxtLink to="/register"> Click to sign up</NuxtLink>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      isLogin: true
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('authenticaterUser',
        {
          email: this.email,
          password: this.password,
          isLogin: this.isLogin
        }
      ).then(() => this.$router.push('/'))
    }
  }
}
</script>

<style scoped>
  .registerClass{
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
  .card-form{
    width: 500px;
  }
</style>
