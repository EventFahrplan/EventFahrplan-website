<template>
  <h1>{{ title }}</h1>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
  export default {
    props: ["title"],
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
