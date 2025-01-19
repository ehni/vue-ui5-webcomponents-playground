<template>
  <div>
    <h1>Hello World</h1>
    <input v-model="inputText" type="text" placeholder="Enter text here" />
    <button @click="logInput">Log Input</button>
    <p>{{ loggedText }}</p>
  </div>
</template>

<script setup>
//import "@ui5/webcomponents/dist/Button.js";

import { ref } from "vue";

const inputText = ref("");
const loggedText = ref("");

function logInput() {
  loggedText.value = inputText.value;
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
