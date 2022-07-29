<template>
  <div>
    <div class="content">
      <h1>
        Why Online Convert From YouTube to WAV Instead of YouTube to MP3?
      </h1>
      <div v-for="instead in insteads" :key="instead._id">
        <p>
          {{ instead.text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      insteads: [
        {
          _id: 1,
          text: 'WAV is a file format developed by Microsoft and IBM. It is a raw format and usually contains lossless and uncompressed audio but is still capable of holding the lossy and compressed variations. So why should you convert from YouTube to WAV instead of YouTube to MP3?'
        },
        {
          _id: 2,
          text: 'In usual cases, a YouTube video that contains music is either already lossy and compressed. Most uploaders choose this setup because it is the easiest way, takes the shortest time to process, and is optimized for distribution. In that scenario, it wouldn’t matter if you convert YouTube to WAV or YouTube to MP3. If the video is already using lossy compression, there is no way that you can retrieve the initial lost data. Hence, there is no difference whether you go from YouTube to WAV or YouTube to MP3 if the YouTube video is already using a file format with lossy compression such as MP4.'
        },
        {
          _id: 3,
          text: 'That leads to another question: When should I convert from YouTube to WAV? This conversion is only for people who are addicted to quality and if the YouTube video is initially on a file format that contains lossless compression such as if it is on the H.264 video compression standard. (H.264 can hold lossy compression but is capable of creating lossless-coded regions.)'
        },
        {
          _id: 4,
          text: 'However, since going from YouTube to WAV means you are interested in capturing the audio quality, a YouTube to WAV converter like ours will do its job if a video’s audio is using a lossless format such as FLAC. Otherwise, as previously pointed out, converting from lossy to lossless would not make any difference, but going from lossless to lossless certainly does.'
        }
      ]
    }
  }
}
</script>
