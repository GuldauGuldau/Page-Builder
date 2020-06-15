<template>
  <section class="bl-about1">
    <div class="ln-container">
      <div class="bl-about1-block">
        <h2 class="ln-base-title-lg-bold ln-base-title-white">{{ menuName }}</h2>
        <h3 class="bl-about1-title" v-html="fields.title"></h3>
        <div class="bl-about1-content" v-html="fields.text"></div>
      </div>
    </div>
    <div class="bl-about1-bg"
    :style="{'background-image':'url(' + fields.image + ')'}"
    ></div>
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
