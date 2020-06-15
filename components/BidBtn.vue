<template>
    <span>
        <button v-if="template == 'icon'"
          type="button"
          class="ci-actions-btn"
          v-tooltip.bottom="{content:'Заявка на расчет стоимости', delay: 0}"
          @click="sendOrder"
          >
          <svg aria-label="Заявка на расчет стоимости" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM16 12H4V10H16V12ZM16 9H4V7H16V9ZM16 6H4V4H16V6Z" fill="#8BB93E"/>
          </svg>
        </button>

        <div class="ln-btn-default ln-btn-inline" @click="sendOrder" v-if="template == 'action-btn'">Оставить заявку</div>

  </span>
</template>

<script>
export default {
  props: {
    companyId: {
      type: Number,
      default: null
    },
    template: {
      type: String,
      default: 'icon'
    }
  },
  computed: {

  },
  data() {
    return {

    }
  },
  methods: {
    sendOrder() {
      //console.log(this.$root);
      this.$root.$refs.orderForm.showOrder(this.companyId);
    }
  }
}
</script>
