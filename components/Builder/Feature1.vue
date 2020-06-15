<template>
  <section class="ln-feature">
    <div class="ln-container">
      <div class="pure-g">
        <template v-for="item in fields.items">
          <div class="pure-u-1" :class="[pureClass]">
            <div class="ln-feature-item">
              <div class="ln-feature-thumb">
                <img :src="'/storage/' + item.icon" alt="">
              </div>
              <div class="ln-feature-counter">{{ item.count }}</div>
              <div class="ln-feature-text" v-html="item.title"></div>
            </div>
          </div>
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
  computed: {
    pureClass() {
      let count = this.fields.items.length;
      let number_col = 6;
      let col = '6-24';
      let prefix = 'pure-u-md-';
      if(count <= 6) {
        number_col = Math.round(24/count);
        col = number_col + '-24';
        if(count == 5) {
          col = '1-5';
        }
      }
      return (prefix + col);
    },

  },
}
</script>
