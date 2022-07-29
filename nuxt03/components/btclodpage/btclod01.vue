<template>
  <div class="content2">
    <div class="row mx-auto">
      <div v-for="card in cards" :key="card._id" class="mx-auto col-sm-6 col-md-4 col-12 py-3">
        <div class="card h-100 howverclass">
          <ion-icon :name="card.icon" class="card-img-top" style="font-size: 100px;color: purple;" />
          <div class="card-body px-lg-5" style="text-align: center;">
            <h5 class="card-title">
              {{ card.title }}
            </h5>
            <p class="card-text">
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
          icon: 'camera-reverse-outline',
          title: 'BTCLOD Youtube Video Downloader',
          text: 'Sports highlights? Music videos? Celebrity interviews? Interesting documentaries? Anything you can find on Youtube, you can download using the Youtube Downloader straight to your device. You can also download Youtube videos as is or convert them to any format of your choice.'
        },
        {
          _id: 2,
          icon: 'mic-outline',
          title: 'YouTube MP3 Downloader',
          text: 'Youtube is a treasure trove of good music, and there is a lot of music available for download through common methods. However, unless you sign up for Youtube’s premium service, you may not be able to download some of these songs. With Youtube Downloader, you can download Youtube MP3 with no fear of such limits.'
        },
        {
          _id: 3,
          icon: 'planet-outline',
          title: 'YouTube Audio Downloader',
          text: 'Youtube approves only four audio formats-- MP3 in MP3/WAV container, PCM audio in WAV container, AAC in MOV container, and FLAC. However, with our Youtube downloader, it doesn’t matter. You can download Youtube audio in any format or download it in one format and convert it to another. As our mantra goes, we got all the bases covered.'
        },
        {
          _id: 4,
          icon: 'radio-outline',
          title: 'YouTube Playlist Downloader',
          text: 'If you wanted to download MP3 and some other audio formats here and there, why not make your own playlist on Youtube and download it? That should make your life a lot easier, wouldn’t it? Downloading YouTube playlists created by you or other users are a convenient way to thematically watch videos or listen to music.'
        },
        {
          _id: 5,
          icon: 'chatbubble-ellipses-outline',
          title: 'Lightning Quick Downloads',
          text: 'Youtube Downloader’s interface is friendly enough that even a beginner can navigate without any problems. Would that be all? No. When you are there, the download process takes only a few moments, and it will give you what you want-- all the videos, audio, and music into your device for FREE!'
        },
        {
          _id: 6,
          icon: 'alarm-outline',
          title: 'Youtube Video To MP3',
          text: 'Here is where YouTube Downloader sets itself apart-- it also has format conversion capabilities. That means YouTube Downloader does not only download videos, but it could also convert them to MP3 for easy storage. This feature is optimal for downloading podcasts or other videos that the visuals are not as important.'
        }
      ]
    }
  }
}
</script>
