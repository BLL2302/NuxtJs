<template>
  <header>
    <nav>
      <div class="navimg">
        <NuxtLink to="/about/1">
          <img src="~/assets/images/logo.png" alt="">
        </NuxtLink>
      </div>
      <div class="rightside">
        <div ref="auth">
          <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="~/assets/images/lang/fr.png" alt="" class="auth_img">
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Setting</a></li>
              <li><a class="dropdown-item" href="#">Payment</a></li>
              <button @click="$store.dispatch('logout')">
                Log out
              </button>
            </ul>
          </div>
        </div>
        <div ref="none_auth">
          <NuxtLink to="/btclod" class="loginclass rightclass px-3 py-2  mx-1 ">
            Log In
          </NuxtLink>
          <NuxtLink to="/register" class="signupclass rightclass px-3 py-2 mx-1">
            Register
          </NuxtLink>
        </div>
        <!-- Example single danger button -->
        <div class="btn-group">
          <button type="button" class="btn btn-danger dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="~/assets/images/lang/en.png" alt="" class="dropdownclass">
            EN
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="title-topclass ">
      Youtube To WAV
    </div>
    <div class="col below--navbar position-relative">
      <SearchVue class="searchbox position-absolute top-100 start-50" />
    </div>
  </header>
</template>
<script>
import SearchVue from './toWavpage/Search.vue'
export default {
  components: {
    SearchVue
  },
  mounted () {
    if (this.$store.state.token !== null) {
      this.$refs.auth.style.display = 'block'
      this.$refs.none_auth.style.display = 'none'
    } else {
      this.$refs.auth.style.display = 'none'
      this.$refs.none_auth.style.display = 'block'
    }
  }
}
</script>
<style scoped>
    header{
        width: 100%;
        background-image: url(~/assets/images/header.jpg);
        height: 364px;
        background-size: cover;
        display: flex;
        flex-direction: column;
    }
    nav{
        width: 100%;
        height: 100px;
        background: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .rightclass{
      text-decoration: none;
      border: 1px solid white;
      border-radius: 26px;
    }
    .rightclass:hover{
      opacity: 0.8;
    }
    .loginclass{
      color: white;
    }
    .signupclass{
      color: black;
      background: #fdcf55;
      border: 1px solid #fdcf55;
    }
    .dropdown-toggle{
      background: none;
      border: none;
      font-size: 0.9rem;
    }
    .dropdownclass{
      width: 16px;
    }
    .rightside{
        display: inline-flex;
        align-items: center;
    }
    .below--navbar{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }
    .title-topclass{
      font-size: 4rem;
      font-weight: 600;
      color: white;
      margin-top: 24px;
      text-align: center;
    }
    .searchbox {
    align-items: center;
    display: flex;
    width: 60%;
    background-color: white;
    padding: 18px;
    border-radius: 50px;
    box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 10%) 0px 8px 24px, rgb(17 17 26 / 10%) 0px 16px 56px;
    transform: translate(-50%, -50%)
    }
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
  .auth_img{
      border-radius: 50%;
    }
</style>
