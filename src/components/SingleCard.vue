<template>
    <div class="single_card">
        <div class="single_card_image">
            <img :src="image" :alt="title">
        </div>

        <div class="single_card_title">
            <h2>{{ title }}</h2>
        </div>

        <div class="single_card_description">
            <p>{{ artist }}</p>
            <p>{{ year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["image", "title", "artist", "year"]
}
</script>