<template>
  <div class="content">
    <h1>
      Do you need to download YouTube WAV converter or stick with an online YouTube to WAV converter?
    </h1>
    <div v-for="info in infos" :key="info._id">
      <p>
        {{ info.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infos: [
        {
          _id: 1,
          text: 'Generally, we recommend using an online YouTube to WAV converter over downloading and installing one. Using a web-based platform is a more efficient option since you can access it using any device and takes up no hard drive space. Plus, not everybody knows how to install software. However, the worst-case scenario if you download and install a YouTube to WAV converter to your computer is the possibility of virus and malware infestation. With an online platform, you don’t usually have to deal with these risks.'
        }
      ]
    }
  }
}
</script>
