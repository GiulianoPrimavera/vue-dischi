<template>
  <div id="app">
    <Navbar :genres="genreList" @changedGenre="setGenre"></Navbar>
    <Main @genresReady="getGenres" :genre="selectedGenre"></Main>
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
  },
  data(){
    return {
      genreList: [],
      selectedGenre: "all"
    }
  },
  methods: {
    getGenres(lista){
      this.genreList = lista
    },
    setGenre(genere){
      this.selectedGenre = genere
    }
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
