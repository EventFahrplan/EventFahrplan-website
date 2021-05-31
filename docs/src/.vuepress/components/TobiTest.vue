<template>
    <div class="box">
    <article class="media">
        <div class="media-left">
            <figure class="image is-64x64">
                <img :src=image :alt=imageDescription>
            </figure>
            </div>
            <div class="media-content">
            <div class="content">
                <p>
                <h2>{{ title }}</h2>
                <br>
                {{ description }}
                </p>
            </div>
        </div>
    </article>
    </div>
</template>

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
