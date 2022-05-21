<template lang="pug">
router-view
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Walter+Turncoat&display=swap");

body,
html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: "Walter Turncoat", cursive; */
  font-family: "Walter Turncoat", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
