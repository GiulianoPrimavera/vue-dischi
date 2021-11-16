<template>
    <div class="single_card">
        <div class="single_card_image">
            <img :src="image" :alt="title">
        </div>

        <div class="single_card_title">
            <h4>{{ title }}</h4>
        </div>

        <div class="single_card_description">
            <p>{{ artist }}</p>
            <p class="small">{{ year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["image", "title", "artist", "year"]
}
</script>