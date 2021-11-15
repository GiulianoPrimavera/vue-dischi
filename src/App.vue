<template>
  <div id="app">
    <Navbar></Navbar>
    <Main></Main>
  </div>
</template>

<script>
import Main from "./components/Main.vue"
import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  components: {
    Navbar,
    Main
  }
}
</script>

<style lang="scss">
@import 'styles/app';
@import 'styles/navbar';
@import 'styles/main';
@import 'styles/singleCard';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
