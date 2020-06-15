<template>
  <section class="bl-about2">
    <div class="ln-container">
      <div class="bl-about2-row">
        <div class="bl-about2-col">
          <h2 class="ln-base-title-lg-bold">{{ menuName }}</h2>
          <div class="bl-about2-intro" v-html="fields.title"></div>
        </div>
        <div class="bl-about2-col">
          <div class="bl-about2-text" v-html="fields.text"></div>
        </div>
      </div>
      <div class="bl-about2-image">
        <img :src="fields.image" alt="">
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
      menuName: {
        type: String,
        default: 'О нас'
      },
    },
  }
</script>
