<template>
  <section class="bl-featured1">
    <div class="ln-container">
      <h2 class="bl-services2-title">Наши преимущества</h2>
      <div class="bl-featured1-row">

        <div class="bl-featured1-item" v-for="item in fields.items">
          <div class="bl-featured1-icon">
            <img :src="'/storage/' + item.icon" alt="">
          </div>
          <div class="bl-featured1-content">
            <h3 class="bl-featured1-title" v-html="item.title"></h3>
            <div class="bl-featured1-text" v-html="item.desc"></div>
          </div>
        </div>

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
  computed: {

  },
}
</script>
