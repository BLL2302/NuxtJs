<template>
  <div>
    <div v-for="data in datas" :key="data.title" class="content">
      <h1>
        {{ data.title }}
      </h1>
      <div v-for="info in infos" :key="info._id">
        <p>
          {{ info.text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datas: [
        {
          title: 'Why Online Convert From YouTube to WAV Instead of YouTube to MP3?',
          infos: [
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
        },
        {
          title: 'What To Look For In a YouTube To WAV Converter Online Platform',
          infos: [
            {
              _id: 1,
              text: 'It won’t be a surprise if every platform that can convert YouTube to WAV or YouTube Converter claims they are the best. With that being said, here are some attributes that you should look for in a YouTube to WAV converter.'
            },
            {
              _id: 2,
              text: 'Easy to use. The process should not be rocket science. The procedure should be very simple that even a first-timer could navigate his way without problems.'
            },
            {
              _id: 3,
              text: 'Modern interface. This is all personal preference, but some platforms out there have not changed a bit in 10 years. Yes, it’s simple enough to use, and it still works, but the interface looks like something from the Ice Age.'
            },
            {
              _id: 4,
              text: 'Fast. The purpose of using a YouTube to WAV converter is to make the process as fast as possible. Ontiva can convert YouTube to WAV in just seconds!'
            }
          ]
        },
        {
          title: 'Do you need to download YouTube WAV converter or stick with an online YouTube to WAV converter?',
          infos: [
            {
              _id: 1,
              text: 'Generally, we recommend using an online YouTube to WAV converter over downloading and installing one. Using a web-based platform is a more efficient option since you can access it using any device and takes up no hard drive space. Plus, not everybody knows how to install software. However, the worst-case scenario if you download and install a YouTube to WAV converter to your computer is the possibility of virus and malware infestation. With an online platform, you don’t usually have to deal with these risks.'
            }
          ]
        }
      ]
    }
  }
}
</script>
