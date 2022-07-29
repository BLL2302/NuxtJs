<template>
  <div>
    <h1>
      Youtube Downloader FAQ
    </h1>
    <div>
      <div v-for="accordion in accordions" :key="accordion._id">
        <button type="button" @click="ishow=!ishow">
          {{ accordion.title }}
        </button>
        <div v-show="ishow">
          <p>
            {{ accordion.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ishow: true,
      accordions:
      [
        {
          _id: 1,
          title: 'Why do i need to use a BTCLOD.COM Youtube Downloader?',
          text: 'Typically, it’s only illegal if the content is copyrighted, and you did not have permission to produce copies of it for distribution. If you download YouTube videos for personal purposes, it is completely legal.'
        },
        {
          _id: 2,
          title: 'Is downloading Youtube videos illegal?',
          text: 'Typically, it’s only illegal if the content is copyrighted, and you did not have permission to produce copies of it for distribution. If you download YouTube videos for personal purposes, it is completely legal.'
        },
        {
          _id: 3,
          title: 'Is using Btclod safe?',
          text: 'Yes. Btclod does not bundle malware or trojans in your downloadable files, and we do not disclose any of your personal information unless on grounds specified on our Terms of Use.'
        },
        {
          _id: 4,
          title: 'How do I save the downloaded videos from Youtube to my device?',
          text: 'In using an online Youtube downloader or a Youtube downloader app, you will only need to paste the URL of the video to the provided box. That’s pretty much it. You have the option to put the downloaded videos or music in the specified folder on your phone or PC'
        },
        {
          _id: 5,
          title: 'What formats are supported by Youtube Downloader?',
          text: 'Youtube supports 13 video formats, including MP4, MPEG4, MOV, AVI, WMV, and others. It also supports four audio formats (MP3 in MP3/WAV container, PCM audio in WAV container, AAC in MOV container, and FLAC). YouTube Downloader allows you to download a video as is, or you may choose to convert, say a Youtube video in WMV format, to an MP4, possibly because of playback purposes. If the video is in high definition or 4K, then YouTube Downloader may also be a 4K Youtube downloader if that’s what you want it to be.'
        }
      ]
    }
  }
}
</script>
