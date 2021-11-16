<template>
  <div class="navbar">
    <div class="navbar_logo_container">
      <img src="@/assets/spoty.png" alt="" />
    </div>

    <div class="navbar_filter_container">
      <select name="album_genre" v-model="selectGenre" @change="$emit('changedGenre', selectGenre)">
        <option value="all">all</option>
        <option v-for="(genere, i) in genres" :key="i" :value="genere">
          {{ genere }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      selectGenre: "all",
    };
  },
  props: { genres: Array },
};
</script>