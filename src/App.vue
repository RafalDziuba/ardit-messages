<template>
  <div>
    <h1>{{ store.contractId }}</h1>
    <form>
      <input type="text" v-model="content" />
      <button @click.prevent="sendContent">Send</button>
    </form>
  </div>
</template>

<script setup>
import { useContractStore } from './stores/contract';
import { ref } from 'vue';

let content = ref('');
const store = useContractStore();
store.getContract();
const sendContent = () => {
  if (content.value == '') {
    return;
  } else {
    store.addContent(content.value);
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,100;1,400;1,500;1,600;1,700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  font-size: 10px;
}
</style>
