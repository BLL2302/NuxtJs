<template>
  <div class="maincontainer">
    <div class="centerclass">
      <div class="containerclass">
        <div class="firstmsgclass">
          <p>By using our service you are accepting our <span><a href="/" style="text-decoration:none; color:#dc3232 ;">terms of use</a></span>.</p>
        </div>
        <Content01Vue />
        <Content02Vue />
        <Content03Vue />
        <Content04Vue />
      </div>
    </div>
  </div>
</template>
<script>
import Content01Vue from './toMp3page/Content01.vue'
import Content02Vue from './toMp3page/Content02.vue'
import Content03Vue from './toMp3page/Content03.vue'
import Content04Vue from './toMp3page/Content04.vue'
export default {
  components: {
    Content01Vue,
    Content02Vue,
    Content03Vue,
    Content04Vue
  }
}
</script>

<style>

.centerclass{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}
.containerclass{
    max-width: 990px;
    padding: 23px;
}
.firstmsgclass{
    margin-top: 30px;
}
.noboderclass{
    border: none;
}
.hoverclass:hover{
    background-color: #c75649;
    border-radius: 8px;
    color: white;
}
.alert-light{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
}
.h1class{
    margin-top: 3rem;
    font-size: 3rem;
    font-weight: 600;
}
.alert-light{
    text-align: left;
    font-size: 1.3rem;
    font-weight: 600;
}
.accordion-button{
    text-align: left;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0rem;
}
.alignleft{
    text-align: left;
    font-size: 1.2rem;
    margin: 1rem 0rem;
    font-weight: 500;
}

</style>
