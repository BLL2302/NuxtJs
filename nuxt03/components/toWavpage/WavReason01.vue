<template>
  <div>
    <h1>
      How do I use the Ontiva YouTube to WAV Converter Free?
    </h1>
    <div v-for="free_convert in free_converts" :key="free_convert._id" class="alert alert-light d-flex align-items-center" role="alert">
      <ion-icon :name="free_convert.icon_name" class="iconclass" />
      <div>
        {{ free_convert.text }}
      </div>
    </div>
    <div v-for="explain in explains" :key="explain._id" style="margin-top:2rem">
      <p>
        {{ explain.text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      free_converts: [
        {
          _id: 1,
          icon_name: 'color-palette',
          text: 'Copy the YouTube video URL and paste it to the box. You can do so by directly copying and pasting the link on the YouTube page or look for it through the “Search” box.'
        },
        {
          _id: 2,
          icon_name: 'heart',
          text: 'Set the file format output which, in this case, is WAV.'
        },
        {
          _id: 3,
          icon_name: 'heart',
          text: 'Click the Convert button'
        },
        {
          _id: 4,
          icon_name: 'heart',
          text: 'It takes a few quick moments before the file to be ready and then clicks Download.'
        },
        {
          _id: 5,
          icon_name: 'heart',
          text: 'Set the destination folder.'
        },
        {
          _id: 6,
          icon_name: 'heart',
          text: 'You can now enjoy your downloaded YouTube video in the WAV format.'
        }
      ],
      explains: [
        {
          _id: 1,
          text: 'A YouTube to WAV online free converter is a software that you can find on the web that allows you to convert YouTube videos to the WAV format. That means no software download is required, which saves you so much time. Ontiva is one such platform. It can convert YouTube videos to any format, including YouTube to WAV and others. Simply access Ontiva and convert YouTube to WAV online free in just seconds!'
        },
        {
          _id: 2,
          text: 'Because YouTube is a giant among all the video-sharing platforms, it is usually the preferred website to upload and share videos with. And now, even more so, many are using YouTube to influence, increase likes, and make money.'
        },
        {
          _id: 3,
          text: 'Aside from videos, YouTube is also a platform where people share music in video format. Now and then, you stumble upon these types of content and wonder: “Is there a way to get this song off YouTube and save it on my device?” The answer to that, of course, is a resounding YES, thanks to our YouTube to WAV converter.'
        }
      ]
    }
  }
}
</script>
