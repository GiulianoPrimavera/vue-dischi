<template>
<div class="main">
  <div class="navbar"></div>

  <div class="cards_container">
      <SingleCard></SingleCard>
  </div>
</div>
</template>

<script>
import SingleCard from './SingleCard.vue'

export default {
    components: {
        SingleCard
    }
};
</script>