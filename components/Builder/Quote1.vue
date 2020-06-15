<template>
  <section class="bl-quote1">
    <div class="ln-container">
      <div class="bl-quote1-block">
        <img src="/storage/static/quote.svg" alt="" class="bl-quote1-icon bl-quote1-icon-left">
        <img src="/storage/static/quote.svg" alt="" class="bl-quote1-icon bl-quote1-icon-right">
        <div class="bl-quote1-text" v-html="fields.text"></div>
        <div class="bl-quote1-author" v-html="fields.author"></div>
      </div>
    </div>
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
