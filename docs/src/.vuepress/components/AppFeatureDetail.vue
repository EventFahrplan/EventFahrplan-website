<template>
    <div class="card columns mx-3 my-5 p-4 is-vcentered is-desktop" :class="{ reverse: isReverse }">
        <div class="card-image column">
            <figure class="image is-4by3">
                <img :src=image :alt=imageDescription>
            </figure>
        </div>
        <div class="card-content column">
            <p class="title is-4">{{ title }}</p>
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
    .reverse {
        flex-direction: row-reverse;
    }
</style>

<script>
    export default {
        props: [ "image", "imageDescription", "title", "description", "imagePositionStart" ],
        data() {
            return {
                isReverse: this.imagePositionStart == false
            };
        }
    }
</script>

