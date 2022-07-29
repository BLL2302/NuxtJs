<template>
  <div class="container px-xl-5 ">
    <div class="content1 mt-2 mt-md-5">
      <h1 class="text-center col-sm-10 col-md-8 mx-auto pt-2 pt-md-5">
        YouTube Downloader Features
      </h1>
      <div class="text-center col-sm-10 col-md-8 mx-auto mt-3 mt-md-4">
        <p class="fontsizeclass">
          Youtube is such a huge part of our modern society. Some rely on it for entertainment, whether in audio or video form. That is why many of us would prefer to have access to our favorite YouTube videos, MP3, and audio anytime, anywhere. The question is “How?” The answer is the ultimate Youtube Downloader. BTCLOD.COM online Youtube downloader enables you to download anything that you can from Youtube, whether that’s audio, MP3, playlist, or video. Whatever is in there, the Youtube downloader will get it for you. With its capabilities, it’s no exaggeration to say it’s the best Youtube downloader around!
        </p>
      </div>
    </div>
    <btclod01Vue />
    <div class="content3 my-sm-3 my-md-5">
      <div class="d-flex ">
        <div><img src="~/assets/images/img01.png" alt="" class="img--para" width="150px"></div>
        <p class="fontsizeclass">
          Have you ever wondered how to download Mp3 from Youtube or how to convert Youtube to Mp3? Well, you came to the right MP3Juice place. YouTube Downloader will do that for you and more. Before anything else, let me tell you something about Youtube first.
        </p>
      </div>
      <p class="fontsizeclass">
        Youtube is very much a part of our everyday lives as drinking coffee in the morning. After all, it is the second most popular social media platform behind Facebook with now over two billion active monthly users! These users (that includes you and me) gobble Youtube like a hungry turkey, spending one billion cumulative hours a day watching these videos. And it’s not going to stop anytime soon because every minute, there are 500 hours of video uploaded on Youtube.
      </p>
      <div class="d-flex">
        <p class="fontsizeclass">
          What do you want to do with all of this content? Well, it’s always a good idea to have all of your favorite Youtube music or videos on your device. You may frequent areas where Internet connections are slow, so it would help if there is actually a way to view videos or listen to songs offline. If you are thinking about doing the same thing, it’s always a plus having a reliable Youtube video downloader and Youtube to MP3 converter.
        </p>
        <div><img src="~/assets/images/img02.png" alt="" width="150px"></div>
      </div>
      <p class="fontsizeclass">
        Now, a question that is probably racing in your mind right now is, “How do I exactly use the YouTube Downloader?” Well, you will be able to experience the amazing capabilities of the YouTube Downloader following these simple steps.
      </p>
    </div>
    <btclod02Vue />
    <btclod03Vue />
  </div>
</template>

<script>
import btclod01Vue from './btclodpage/btclod01.vue'
import btclod02Vue from './btclodpage/btclod02.vue'
import btclod03Vue from './btclodpage/btclod03.vue'
export default {
  components: {
    btclod01Vue,
    btclod02Vue,
    btclod03Vue
  }
}
</script>
<style scoped>
.fontsizeclass{
  font-size: 1.5rem;
  font-weight: 300;
}
  .howverclass{
    box-shadow: rgba(95, 40, 102, 0.694) 0px 5px 15px;
}

.howverclass:hover{
    background-image: linear-gradient(to bottom,#512455, #812265);
    color: #fef8fe;
}

.noboderclass{
    border: none;
}
.collapfont{
    font-size: 1.4rem;
    font-weight: 400;
}
</style>
