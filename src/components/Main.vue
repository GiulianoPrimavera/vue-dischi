<template>
  <div class="main">
    <div class="cards_container">
      <SingleCard v-for="(card, i) in cardsList" :key="i"
      :image="card.poster"
      :title="card.title.toUpperCase()"
      :artist="card.author"
      :year="card.year"
      ></SingleCard>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import SingleCard from "./SingleCard.vue";

export default {
  components: {
    SingleCard,
  },
  data() {
    return {
      cardsList: [],
    };
  },
  mounted() {
      axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((resp) =>{
        console.log(resp.data.response);
          this.cardsList.push(...resp.data.response)
      })
  },
};
</script>