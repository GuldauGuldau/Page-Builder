<template>
  <section
    class="bl-banner2"
    :style="{'background-image':'url(' + fields.image + ')'}"
    >
    <div class="bl-banner2-body">
        <h2 class="bl-banner2-title" v-html="fields.title"></h2>
        <div class="bl-banner2-text"  v-html="fields.text"></div>
        <div class="bl-banner2-action">
          <bid-btn
          :company-id="companyId"
          template="action-btn"
          >
        </bid-btn>
        <call-btn
          :company-id="companyId"
          template="action-btn"
        ></call-btn>
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
      companyId() {
        return this.$parent.companyId;
      }
    }
  }
</script>
