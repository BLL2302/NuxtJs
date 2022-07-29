<template>
  <div class="containerno4">
    <h1 class="h1class">
      Make It All Possible In A Few Clicks
    </h1>
    <p v-for="msg in msgs" :key="msg._id" class="alignleft">
      {{ msg.msg_text }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msgs: [
        {
          _id: 1,
          msg_text: 'Being not only a most reputable YouTube to MP3 converter, but Ontiva is also very dependent on FLAG, OGG, and other format converters.'
        },
        {
          _id: 2,
          msg_text: 'Our all-in-one and easy-to-use online platform allows users to have unlimited access to YouTube content and offer them the highest download video quality.'
        },
        {
          _id: 3,
          msg_text: 'Our all-in-one and easy-to-use online platform allows users to have unlimited access to YouTube content and offer them the highest download video quality.'
        }
      ]
    }
  }
}
</script>
