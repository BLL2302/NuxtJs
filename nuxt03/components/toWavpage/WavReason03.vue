<template>
  <div class="content">
    <h1>
      What To Look For In a YouTube To WAV Converter Online Platform
    </h1>
    <div v-for="platform in platfroms" :key="platform._id">
      <p>
        {{ platform.text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      platfroms: [
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
    }
  }
}
</script>
