<template>
  <section class="bl-info1">
    <div class="bl-info1-container" v-html="fields.text"></div>
  </section>
</template>

<script>
  export default {
    props: {
      fields: {
        type: Object,
        default: null
      },
    },
  }
</script>
