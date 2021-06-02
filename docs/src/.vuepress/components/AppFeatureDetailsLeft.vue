<template>
    <div class="box">
    <article class="media">
        <div class="media-left">
            <vue-picture-swipe :items="items"></vue-picture-swipe>
            <!-- <figure class="image is-4by3">
                <img :src=image :alt=imageDescription>
            </figure> -->
        </div>
        <div class="media-content">
            <div class="content pre-formatted">
                <p>
                <h2>{{ title }}</h2><br>{{ description }}
                </p>
            </div>
        </div>
    </article>
    </div>
</template>

<style scoped>
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

