<template>
  <section class="registerClass">
    <div class="card card-form">
      <h2>Register</h2>
      <div class="card-body">
        <form class="form-setup" @submit.prevent="onSubmit">
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
            <label for="re-password">
              Re-password
            </label>
            <input id="re-password" v-model="repassword" type="password" placeholder="re-type your password">
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
          Have your account? <NuxtLink to="/login"> Log in here</NuxtLink>
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
      repassword: ''
    }
  },
  methods: {
    checkValidPassword () {
      return this.password === this.repassword
    },
    onSubmit () {
      const validPassword = this.checkValidPassword()
      if (validPassword) {
        this.$store.dispatch('authenticaterUser',
          {
            email: this.email,
            password: this.password
          }
        ).then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
          if (result.success) { this.$router.push('/login') }
        })
      } else {
        // eslint-disable-next-line no-console
        console.log('password is not valid')
      }
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
