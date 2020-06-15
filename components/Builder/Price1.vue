<template>
  <section class="ln-price">
    <div class="ln-container">
      <h2 class="ln-base-title-lg">Стоимость</h2>
      <div class="pure-g pure-row ln-price-list">

        <div
          class="pure-u-1 pure-u-md-12-24 ln-price-item-margin"
          :class="[pureClass]"
          v-for="item in fields.items">
            <div class="ln-price-item">
              <div class="ln-price-head">
                <div class="ln-price-name">{{ item.title }}</div>
              </div>
              <div class="ln-price-price">
                <div class="ln-price-bold" v-html="item.price"></div>
                <div class="ln-price-small" v-html="item.term"></div>
              </div>
              <div class="ln-price-body" v-html="item.text"></div>
              <div class="ln-price-foot">
                <a href="" class='ln-btn-default'>Отправить заявку</a>
              </div>
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
    pureClass() {
      var col = (this.fields.items.length <= 4) ? 24/this.fields.items.length : 6;
      return "pure-u-lg-"+ col +"-24";
    },
  },
}
</script>
