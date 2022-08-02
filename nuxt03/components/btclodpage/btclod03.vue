<template>
  <div>
    <h1>
      Youtube Downloader FAQ
    </h1>
    <div class="faqs">
      <FAQ
        v-for="(faq, i) in faqs"
        :key="i"
        :faq="faq"
        :index="i"
        :open="faq.open"
        @toggleOpen="toggleOpen"
      />
    </div>
  </div>
</template>
<script>
import FAQ from './accordion.vue'
export default {
  components: {
    FAQ
  },
  data () {
    return {
      faqs:
      [
        {
          _id: 1,
          question: 'Why do i need to use a BTCLOD.COM Youtube Downloader?',
          answer: 'Typically, it’s only illegal if the content is copyrighted, and you did not have permission to produce copies of it for distribution. If you download YouTube videos for personal purposes, it is completely legal.',
          open: false
        },
        {
          _id: 2,
          question: 'Is downloading Youtube videos illegal?',
          answer: 'Typically, it’s only illegal if the content is copyrighted, and you did not have permission to produce copies of it for distribution. If you download YouTube videos for personal purposes, it is completely legal.'
        },
        {
          _id: 3,
          question: 'Is using Btclod safe?',
          answer: 'Yes. Btclod does not bundle malware or trojans in your downloadable files, and we do not disclose any of your personal information unless on grounds specified on our Terms of Use.',
          open: false
        },
        {
          _id: 4,
          question: 'How do I save the downloaded videos from Youtube to my device?',
          answer: 'In using an online Youtube downloader or a Youtube downloader app, you will only need to paste the URL of the video to the provided box. That’s pretty much it. You have the option to put the downloaded videos or music in the specified folder on your phone or PC',
          open: false
        },
        {
          _id: 5,
          question: 'What formats are supported by Youtube Downloader?',
          answer: 'Youtube supports 13 video formats, including MP4, MPEG4, MOV, AVI, WMV, and others. It also supports four audio formats (MP3 in MP3/WAV container, PCM audio in WAV container, AAC in MOV container, and FLAC). YouTube Downloader allows you to download a video as is, or you may choose to convert, say a Youtube video in WMV format, to an MP4, possibly because of playback purposes. If the video is in high definition or 4K, then YouTube Downloader may also be a 4K Youtube downloader if that’s what you want it to be.',
          open: false
        }
      ]
    }
  },
  methods: {
    toggleOpen (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }
        return faq
      })
    }
  }
}
</script>

<style>
.faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
}
.faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}
.faq .question::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);
  width: 30px;
  height: 30px;
  background-image: url('~/assets/images/add1.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  background-image: url('~/assets/images/minus.png')
}
.faq .answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}
</style>
