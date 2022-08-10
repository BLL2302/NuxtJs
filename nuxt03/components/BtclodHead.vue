<template>
  <header>
    <nav>
      <div class="navimg">
        <NuxtLink to="/">
          <img src="~/assets/images/logo.png">
        </NuxtLink>
      </div>
      <div class="leftside">
        <div class="">
          <NuxtLink to="/" class="homeclass">
            Home
          </NuxtLink>
        </div>
        <div class="">
          <NuxtLink to="/about/1" class="homeclass">
            About
          </NuxtLink>
        </div>
        <div class="">
          <NuxtLink to="/btclod" class="homeclass">
            Contact US
          </NuxtLink>
        </div>
      </div>
      <div class="rightside">
        <div>
          <NuxtLink to="/login" class="loginclass rightclass px-3 py-2  mx-1 ">
            LOGIN
          </NuxtLink>
          <NuxtLink to="/register" class="signupclass rightclass px-3 py-2 mx-1">
            SIGN UP
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
    <div class="col below--navbar">
      <div class="title-topclass">
        Youtube Downloader
      </div>
      <div class="title-below">
        The best Youtube Downloader - Video Downloader. It’s fast, free, and fantastic!
      </div>
      <div class="searchbox">
        <input type="text" placeholder="Search or paste link here" class="searchbar">
        <button class="search-btn">
          SEARCH
        </button>
      </div>
      <div class="termsclass">
        By using our service you are accepting our <span style="color:purple">terms of use</span>.
      </div>
    </div>
  </header>
</template>

<style scoped>
    header{
        width: 100%;
        background: #fef8fe;
    }
    nav{
        width: 100%;
        height: 64px;
        background-image: linear-gradient(to right,purple,#6e3367);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .leftside{
        display: flex;
    }
    .homeclass{
      text-decoration: none;
      padding: 8px 16px;
      color: white;
    }
    .homeclass:hover{
      text-decoration: none;
      padding: 8px 16px;
      border: 1px solid white;
      border-radius: 28px;
      color: white;
      opacity: 0.6;
    }
    .rightclass{
      text-decoration: none;
      border: 1px solid white;
      border-radius: 26px;
    }
    .loginclass{
      color: white;
    }
    .signupclass{
      color: black;
      background: white;
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
        background: none;
    }
    .title-topclass{
      font-size: 3.2rem;
      font-weight: 500;
      color: purple;
      margin-top: 24px;
    }
    .title-below{
      font-size: 1rem;
      font-weight: 300;
      color: #872166;
    }
    .searchbox {
    align-items: center;
    display: flex;
    max-width: 100%;
    min-width: 0;
    width: 70%;
    margin: 40px;
    background-color: white;
    padding: 30px;
    border-radius: 101px;
    position: relative;
    box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 10%) 0px 8px 24px, rgb(17 17 26 / 10%) 0px 16px 56px;
    }
    .searchbar{
        flex: 1 1 auto;
        outline: none;
        border: none;
    }
    .search-btn{
    position: absolute;
    right: 1%;
    border-radius: 48px;
    padding: 20px 24px;
    border: none;
    background:#872166;
    color: white;
    }
</style>
