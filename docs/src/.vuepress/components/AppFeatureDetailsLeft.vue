<template>
    <div class="card columns mx-3 my-5">
        <div class="card-image column">
            <figure class="image is-4by3">
                <img :src=image :alt=imageDescription>
            </figure>
            <!-- <figure class="image is-4by3">
                <vue-picture-swipe :items="items" :alt=imageDescription></vue-picture-swipe>
            </figure> -->
        </div>
        <div class="card-content column">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{ title }}</p>
                </div>
            </div>

            <div class="content pre-formatted">{{ description }}</div>
        </div>
    </div>



</template>

<style scoped>
    .card-image {
        max-width: 700px !important;
    }
    .pre-formatted {
        white-space: pre-wrap;
    }
    h2 {
        margin-top: 0 !important;
    }
</style>

<script>
    import VuePictureSwipe from 'vue-picture-swipe';
    export default {
        components: {
            'VuePictureSwipe': VuePictureSwipe,
        },
        props: [ "image", "imageDescription", "thumbnailImage", "title", "description" ],
        data() {
            return {
                items: [{
                    src: this.image,
                    thumbnail: this.thumbnailImage,
                    w: 640,
                    h: 480,
                    alt: this.imageDescription
                }]
            };
        }
    }
</script>

