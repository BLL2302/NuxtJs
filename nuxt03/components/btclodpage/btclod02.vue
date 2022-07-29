<template>
  <div class="content4">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="card in cards" :key="card._id" class="col">
        <div class="card h-100 noboderclass">
          <img :src="card.img" class="card-img-top align-self-center" :alt="`Img of ${card._id}`" style="width:136px">
          <div class="card-body">
            <p class="card-text" style="text-align:center">
              {{ card.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cards: [
        {
          _id: 1,
          img: require('~/assets/images/step-1.png'),
          text: 'You need to copy the URL of the Youtube video found in the address bar.'
        },
        {
          _id: 2,
          img: require('~/assets/images/step-2.png'),
          text: 'After copying the Youtube video URL, paste it into the provided space in the Youtube Downloader page.'
        },
        {
          _id: 3,
          img: require('~/assets/images/step-3.png'),
          text: 'Youtube Downloader offers a variety of options on what you want to do with your chosen video. You may convert Youtube video to MP3 (convertidor de youtube a mp3) or download it as is on a specified folder.'
        },
        {
          _id: 4,
          img: require('~/assets/images/step-4.png'),
          text: 'And now the moment of truth! After clicking the Download option, wait a few moments and the video or MP3 will be sent straight to your device.'
        }
      ]
    }
  }
}
</script>
