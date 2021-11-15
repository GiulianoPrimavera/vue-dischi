<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from "./components/Main.vue"

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style lang="scss">
@import 'styles/app';
@import 'styles/navbar';
@import 'styles/main';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
