<template>
  <div class="main">
    <div class="cards_container">
      <SingleCard
        v-for="(card, i) in cardListFiltered"
        :key="i"
        :image="card.poster"
        :title="card.title.toUpperCase()"
        :artist="card.author"
        :year="card.year"
      ></SingleCard>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleCard from "./SingleCard.vue";

export default {
  components: {
    SingleCard,
  },
  data() {
    return {
      cardsList: [],
      genreList: [],
    };
  },
  props: { genre: String },
  computed: {
    cardListFiltered() {
      return this.cardsList.filter((el) => {
        if (el.genre === this.genre || this.genre === "all") {
          return true;
        }
      });
    },
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        console.log(resp.data.response);
        this.cardsList.push(...resp.data.response);

        this.cardsList.forEach((element) => {
          if (!this.genreList.includes(element.genre)) {
            this.genreList.push(element.genre);
          }
        });
        console.log("lista dei generi", this.genreList);

        this.$emit("genresReady", this.genreList);
      });
  },
};
</script>