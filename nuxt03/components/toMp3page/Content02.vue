<template>
  <div class="containerno2">
    <h1 class="h1class">
      How To Convert YouTube To MP3?
    </h1>
    <p style="font-size: 1.2rem; font-weight: 500">
      The process is as easy as pie!
    </p>
    <div v-for="content_alert in content_alerts" :key="content_alert._id" class="alert alert-light" role="alert">
      {{ content_alert.alert_text }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content_alerts: [
        {
          _id: 1,
          alert_text: '1. Click on the YouTube video that you wish to convert.'
        },
        {
          _id: 2,
          alert_text: '2. Copy the link of that video from the YouTube address bar.'
        },
        {
          _id: 3,
          alert_text: '3. Open the Ontiva site and paste the URL on the bar. Click “Start now.”'
        },
        {
          _id: 4,
          alert_text: '4. You will see the video you want to convert on the left side of the screen. And on the right side, there will be 5 outputs you need to choose from: MP3, audio, video, YouTube to GIF maker, and thumbnail downloader. Select the converting type and format you prefer.'
        },
        {
          _id: 5,
          alert_text: '5. Before choosing the file size, you can cut your video’s duration by adjusting the time below the video.'
        },
        {
          _id: 6,
          alert_text: '6. Click “Convert” to begin the conversion process. The larger the file, the longer it takes to download.'
        },
        {
          _id: 7,
          alert_text: '7. Now, click the red “Download” button and set the destination folder on your computer. Wait until the file is in your assigned folder.'
        },
        {
          _id: 8,
          alert_text: '8. And you’re set! Easy, isn’t it?'
        }
      ]
    }
  }
}

</script>
