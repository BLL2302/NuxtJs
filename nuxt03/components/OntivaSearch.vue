<template>
  <div style="flex:1 1 auto; position: relative;">
    <div class="title-topclass ">
      Youtube to MP3
    </div>
    <div class="convertclass">
      Convert and download Youtube videos to MP3, MP4, WAV OGG online for free
    </div>
    <div class="col below--navbar">
      <div class="searchbox position-absolute top-100 start-50">
        <input type="text" placeholder="Search or paste link here" class="searchbar">
        <button class="search-btn d-flex justify-content-center">
          START NOW <ion-icon
            name="arrow-forward-outline"
            style="height: 22px;
            width: 30px;"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
    .convertclass{
      text-align: center;
      color: white;
      font-weight: 400;
      font-size: 1.2rem;
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
</style>
