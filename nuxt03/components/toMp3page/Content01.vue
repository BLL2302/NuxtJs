<template>
  <div class="containerno1">
    <h1 class="introclass h1class">
      Ontiva Youtube to MP3 Converter features:
    </h1>
    <p>
      The website focuses strongly on converting <span class="fattypeclass">YouTube video to MP3</span> files. However, we also offer several features and services that allow users to finish their work most conveniently. Without scrolling through thousands of search results on Google for converter tools, here are what Ontiva provides users with:
    </p>
    <div class="row mx-auto">
      <div v-for="card in cards" :key="card._id" class="mx-auto col-sm-6 col-md-4 col-9 py-3 hoverclass ">
        <div class="card h-100 hoverclass noboderclass">
          <ion-icon :name="card.icon_name" class="card-img-top" style="font-size: 100px;color: #dc3232;" />
          <div class="card-body">
            <h5 class="card-title">
              {{ card.card_title }}
            </h5>
            <p class="card-text">
              {{ card.card_text }}
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
          icon_name: 'camera-reverse-outline',
          card_title: 'YouTube To MP3',
          card_text: 'Ontiva YouTube converter to MP3 offers users unlimited access to all kinds of videos on YouTube as well as free registration. You can convert videos in YouTube to MP3 files and download it without encountering intrusive ads or obligated installation. Enjoy your converting experience to the fullest!'
        },
        {
          _id: 2,
          icon_name: 'airplane-outline',
          card_title: 'YouTube To MP4',
          card_text: 'Converting YouTube to MP4 format is just one of our many services. Users can receive the fastest and highest converted quality when Ontiva provides up to 15 different file sizes and 7 levels of video resolution for MP4 formats. And worry not; our website won’t flood your devices with virus since we ads-free ='
        },
        {
          _id: 3,
          icon_name: 'bonfire-outline',
          card_title: 'YouTube Downloader',
          card_text: 'Ontiva YouTube converter to MP3 offers users unlimited access to all kinds of videos on YouTube as well as free registration. You can convert videos in YouTube to MP3 files and download it without encountering intrusive ads or obligated installation. Enjoy your converting experience to the fullest!'
        },
        {
          _id: 4,
          icon_name: 'bar-chart-outline',
          card_title: 'Convert Youtube Playlist',
          card_text: 'You can convert your YouTube playlist to MP3 files instantly after registering an account. We understand that no one loves this extra step, but since downloading a playlist is a huge work, registering to Ontiva will only help you.Registering is needed if you want to convert a YouTube playlist to MP3 only.'
        },
        {
          _id: 5,
          icon_name: 'color-filter-outline',
          card_title: 'Youtube To WAV',
          card_text: 'WAV file must be one of the simplest and most popular digital audio formats that set a standard in studio recording. Luckily, Ontiva also supports extracting audio tracks from YouTube videos and transforming to WAV format for free. Do not hesitate and contact us immediately if you have difficulty converting your files.'
        },
        {
          _id: 6,
          icon_name: 'cog-outline',
          card_title: 'YouTube Converter',
          card_text: 'Apart from the most common MP4, MP3, or WAV format, our platform supports multiple conversions such as FLAC, WMV, ACC, OGG, WMA, MP2, FLV, 3GP, MOV, and AVI. And yes, we can even make GIFs out of YouTube clips.All of these formats require no registration.'
        }
      ]
    }
  }
}
</script>
