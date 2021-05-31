<template>
    <div class="box">
    <article class="media">
        <div class="media-left">
            <figure class="image">
                <img :src=image :alt=imageDescription>
            </figure>
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
    export default {
        props: [ "image", "imageDescription", "title", "description" ],
        data() {
            return {
                isActive: true
            }
        }
    }
</script>

