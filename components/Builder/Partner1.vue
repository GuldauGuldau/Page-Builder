<template>
  <section class="ln-partner">
    <div class="ln-container">
      <h2 class="ln-base-title-lg">Партнеры</h2>
      <div class="ln-partner-list">

        <template v-for="item in fields.items">
        <a :href="item.link" class="ln-partner-item">
          <img :src="'/storage/' + item.logo" alt="">
        </a>
        </template>

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
