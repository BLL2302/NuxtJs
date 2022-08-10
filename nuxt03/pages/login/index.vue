<template>
  <section class="registerClass">
    <div class="card card-form">
      <h2>Log In</h2>
      <div class="card-body">
        <form @submit.prevent="onSubmit">
          <div class="form_group">
            <label for="email">
              Email
            </label>
            <input id="email" v-model="email" type="text" placeholder="type your email">
          </div>
          <div class="form_group">
            <label for="password">
              Password
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
  layout: 'auth',
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
      ).then((result) => {
        // eslint-disable-next-line no-console
        console.log(result)
        if (result.success) { this.$router.push('/') }
      })
    }
  }
}
</script>

<style scoped>
  .registerClass{
    display: flex;
    justify-content: center;
    padding-top: 100px;
    background-image: url(~/assets/images/header.jpg);
    background-repeat: round;
  }
  .card-form{
    width: 600px;
    text-align: center;
    color: indianred;
    background-image: linear-gradient(to right, rgb(39, 220, 227), rgb(251, 251, 251));
  }
  .form_group{
    display: flex;
    flex-direction: column;
    text-align: center;
    color: deeppink;
    padding-top: 16px;
  }
  .toLogin{
    text-align: center;
  }
</style>
