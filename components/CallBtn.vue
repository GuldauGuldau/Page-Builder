<template>
  <span>
    <button
      v-if="template == 'icon'"
      type="button"
      @click="showCallForm"
      class="ci-actions-btn"
      v-tooltip.bottom="{content:'Обратный звонок', delay: 0}">

      <svg aria-label="Заказать обратный звонок" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1667 10.4167C13.125 10.4167 12.125 10.25 11.1917 9.94167C10.9 9.85 10.575 9.91667 10.3417 10.1417L8.50833 11.975C6.15 10.775 4.21667 8.85 3.01667 6.48333L4.85 4.64167C5.08333 4.425 5.15 4.1 5.05833 3.80833C4.75 2.875 4.58333 1.875 4.58333 0.833333C4.58333 0.375 4.20833 0 3.75 0H0.833333C0.375 0 0 0.375 0 0.833333C0 8.65833 6.34167 15 14.1667 15C14.625 15 15 14.625 15 14.1667V11.25C15 10.7917 14.625 10.4167 14.1667 10.4167ZM13.3333 7.5H15C15 3.35833 11.6417 0 7.5 0V1.66667C10.725 1.66667 13.3333 4.275 13.3333 7.5ZM10 7.5H11.6667C11.6667 5.2 9.8 3.33333 7.5 3.33333V5C8.88333 5 10 6.11667 10 7.5Z" fill="#EB5D38"/>
      </svg>

    </button>

    <div
    class="ln-btn-default ln-btn-inline ln-btn-white"
      @click="showCallForm"
    v-if="template == 'action-btn'">Обратный звонок</div>
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
  methods: {
    showCallForm() {
      this.$root.$refs.callForm.showForm(this.companyId);
    }
  }
}
</script>
