<template>
  <div>
    <div class="testStoreMain">
      <h1 class="testTitle">
        calculator test
      </h1>
      <div class="valueTest">
        {{ $store.state.counter }}
      </div>
      <div class="buttonsTest">
        <button @click="$store.commit('decreaseCounter')">
          -
        </button>
        <button @click="$store.dispatch('increaseCounter')">
          +
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Teststore'
}
</script>

<style>
.testStoreMain{
    margin-top: 15%;
}
button{
    width: 60px;
    height: 60px;
    background: rgb(116, 10, 109);
    color: aliceblue;
    font-size: 2rem;
}
.testTitle{
    text-align: center;
}
.valueTest{
    text-align: center;
}
.buttonsTest{
    display: flex;
    justify-content: center;
}
</style>
