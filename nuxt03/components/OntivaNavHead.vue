<template>
  <nav>
    <div class="navimg">
      <NuxtLink to="/">
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
      <div ref="none_auth" class="none_auth">
        <NuxtLink to="/login" class="loginclass rightclass px-3 py-2  mx-1 ">
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
</template>
<script>
export default {
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
    .auth_img{
      border-radius: 50%;
    }
</style>
