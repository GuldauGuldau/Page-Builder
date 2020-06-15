<template>
  <section class="ln-project ln-project-bg">
    <div class="ln-container">
      <h1 class="ln-base-title-lg-bold">Акции и распродажи</h1>

      <div class="ln-sale-list" v-if="sales.length > 0">
        <div class="dm-sale-col" v-for="sale in sales">
        <div class="dm-sale-item">
          <a :href="'/sales/' + sale.id">
            <div
              class="dm-sale-item-thumb"
              :style="{'background-image':'url(' + sale.fm_image + ')'}"
            ></div>

            <div class="dm-sale-item-info">
              <div class="dm-sale-item-block">
                <h5 class="dm-sale-item-title">{{ sale.title }}</h5>
                <div class="dm-sale-item-from">
                  <small>От:</small>
                  <b>{{ companyName }}</b>
                </div>
              </div>
              <div class="dm-sale-item-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L8.2375 1.7625L15.2125 8.75H0V11.25H15.2125L8.2375 18.2375L10 20L20 10L10 0Z" fill="black"/>
                </svg>
              </div>
            </div>

          </a>

        </div>
        </div>
      </div>

      <div v-else >
        <div class="bl-empty-text">
          Нет действующих акции.<br>
          Добавить акции вы можете в <a href="/account/sales" target="_blank">личном кабинете</a>
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
    data: {
      type: Object,
      default: null
    },
    companyAlias: {
      type: String,
      default: null
    },
    companyName: {
      type: String,
      default: null
    }
  },
  data: function () {
    return {
      sales: this.data.sales
    }
  },
  computed: {

  },

}
</script>
