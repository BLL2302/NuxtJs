<template>
  <div class="maincenterclass">
    <div class="mainappclass">
      <div>
        <p id="introid" class="introclass">
          By using our service you are accepting our
          <span><a href="/" style="text-decoration:none;color:red">terms of use</a></span>.
        </p>
        <p id="introid">
          At Ontiva, our
          <span class="spanfontweigh">YouTube to WAV</span> Converter is an excellent tool for the conversion of various <span class="spanfontweigh">YouTube videos</span> to the Waveform Audio file format or WAV. You can do so effortlessly on our <span><a href="/">MP3Juice</a></span> with a few simple steps.
        </p>
      </div>
      <div id="content01" class="content">
        <h1>What is a YouTube To WAV Online Free Converter?</h1>
        <p>A YouTube to WAV online free converter is a software that you can find on the web that allows you to convert YouTube videos to the WAV format. That means no software download is required, which saves you so much time. Ontiva is one such platform. It can convert YouTube videos to any format, including YouTube to WAV and others. Simply access Ontiva and convert YouTube to WAV online free in just seconds!</p>
      </div>
      <WavReason01Vue />
      <WavReason02Vue />
      <WavReason03Vue />
      <WavReason04Vue />
    </div>
  </div>
</template>
<script>
import WavReason01Vue from './toWavpage/WavReason01.vue'
import WavReason02Vue from './toWavpage/WavReason02.vue'
import WavReason03Vue from './toWavpage/WavReason03.vue'
import WavReason04Vue from './toWavpage/WavReason04.vue'
export default {
  components: {
    WavReason01Vue,
    WavReason02Vue,
    WavReason03Vue,
    WavReason04Vue
  }
}
</script>

<style>

.maincenterclass{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
}
.mainappclass{
    display: flex;
    max-width: 1150px !important ;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.introclass{
    padding-top: 10px;
    text-align: center;
}
.spanfontweigh{
  font-weight: 650;
}
.alert-light{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
}
.iconclass{
  color: rgb(154, 20, 76);
  height: 40px;
  width: 40px;
  margin-right: 24px;
}
.content h1{
    padding : 40px;
    font-size: 3rem;
    padding-left: 0;
    font-weight: 600;

}

.align-items-center{
    font-size: 1.5rem;
    font-weight: 40px;
}
</style>
