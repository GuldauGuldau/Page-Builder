<template>
  <div>
    <modal
    :show="isShow"
    @close="isShow = false"
    width-modal="lg">
      <div class="ln-req order">
          <div class="ln-req-scroll">
            <div class="ln-req-title">
              <span>Расчитать стоимость</span>
            </div>
            <div class="ln-req-text">
              Отправьте заявку интересующим Вас компаниям и получите расчет стоимости.
              Зарегистрируйтесь, чтобы  просматривать свои заявки и получать отклики
              в личном кабинете
            </div>
          <form @submit.prevent="sendBid">
            <div class="ln-req-body">

              <div class="ln-req-row">
                  <div class="ln-req-col-50">
                    <div class="ln-req-group">
                      <label class="ln-base-label">Имя</label>
                      <input
                        type="text"
                        placeholder="Введите значение"
                        name="fields[name]"
                        class="ln-base-input"
                        required="true"
                        v-model="fields.name"
                        autocomplete="off"
                        >
                    </div>
                    <div class="ln-req-group">
                      <label class="ln-base-label">Контакты для связи (телефон или email)</label>
                      <input
                        type="text"
                        placeholder="Введите значение"
                        name="fields[contact]"
                        class="ln-base-input"
                        required="true"
                        v-model="fields.contact"
                        autocomplete="off"
                        >
                    </div>
                    <div class="ln-req-group">
                      <label class="ln-base-label">Город</label>
                      <input
                        type="text"
                        placeholder="Введите значение"
                        name="fields[city]"
                        class="ln-base-input"
                        required="true"
                        v-model="fields.city"
                        autocomplete="off"
                        >
                    </div>
                  </div>

                  <div class="ln-req-col-50">
                    <div class="ln-req-group">
                      <label class="ln-base-label">Сообщение</label>
                      <textarea
                        placeholder="Текст сообщение"
                        class="ln-base-textarea"
                        rows="12"
                        name="fields[message]"
                        required="true"
                        style="font-size: 14px;"
                        v-model="fields.message"
                        ></textarea>
                    </div>
                  </div>
              </div>
                <div class="ln-req-errors" v-if="errors">Ошибка отправки</div>
                <div class="ln-req-foot"><button class="ln-btn-default ln-btn-inline">Отправить</button></div>

                <div class="ln-req-bid-alert" v-if="showAlert">
                  <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  fill="black" d="M6.46381 11.4962L4.12865 8.14862C3.35547 7.04021 -0.675155 9.85175 0.09803 10.9602L4.44316 17.1893C5.21636 18.2977 6.75587 18.572 7.86428 17.7988C8.17945 17.579 8.4246 17.2959 8.59998 16.9797L8.60198 16.9807C8.60198 16.9807 8.60739 16.9685 8.61178 16.9586C8.6677 16.8555 8.71715 16.7495 8.75761 16.6401C9.65173 14.7159 14.3867 4.99428 21 0C21 2.67788e-07 12.6722 0.210372 6.46381 11.4962Z"/>
                  </svg>
                  <div>Успешно отправлено!</div>
                  <br></br>
                  <div class="ln-btn-default ln-btn-inline" @click="closeOrder">Закрыть</div>
                </div>
            </div>

            </form>
          </div>
      </div>
    </modal>
  </div>

</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: null
    },
    categoryId: {
      type: Number,
      default: null
    },
    user: {
      type: Object,
      default: null
    },
  },
  data() {
    return {
      isShow: false,
      fields: {
        name: '',
        contact: '',
        city: '',
        message: ''
      },
      bidId: null,
      showAlert: false,
      companyId: null,
      errors: false
    }
  },
  methods: {
    showOrder(company_id) {
      this.isShow = true;
      this.companyId = company_id;
    },
    closeOrder() {
      this.isShow = false;
      this.showAlert = false;
    },
    alert() {
      this.showAlert = true;
    },
    sendBid() {
      axios
      .post('/bids', {
        category_id: this.categoryId,
        fields: JSON.stringify(this.fields),
        company_id: this.companyId,
        bid_id: this.bidId
      })
      .then(response => {
        console.log(response);
        if(!response.data.errors) {
          this.bidId = response.data.id;
          if(response.data.id) {
            localStorage.setItem('bid_id', response.data.id);
          }
          if(response.data.fields) {
            localStorage.setItem('bid', JSON.stringify(response.data.fields));
          }
          this.errors = false;
          this.alert();
        } else {
          this.errors = true;
        }
      }).catch(error => {
        if (error.response) {
          this.errors = true;
          console.log(error.response);
        }
      });

    },

    getData() {
        //  Загружаем из Local Storage
        if(localStorage.getItem('bid')) {
          this.fields = JSON.parse(localStorage.getItem('bid'));
        }
        if(localStorage.getItem('bid_id')) {
          this.bidId = JSON.parse(localStorage.getItem('bid_id'));
        }
    },

  },

  mounted() {
    this.getData();
  }
}
</script>

<style>
.ln-req-errors {
    font-size: 12px;
    font-weight: 600;
    color: red;
    padding-bottom: 10px;
}
  .ln-req-bid-alert {
      position: absolute;
      background: #fff;
      top: 0;
      height: 100%;
      width: calc(100% - 40px);
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      font-weight: 500;
      z-index: 1;
  }
  .ln-req.order {
    height: 90vh;
    max-height: 480px;
    padding: 0;
  }
  .ln-req-scroll {
    padding: 20px;
  }
  .ln-req  .hooper-liveregion {
    display: none;
  }
  .ln-req .hooper {
    position: relative;
    z-index: 1;
  }
  .ln-order-btn {
    position: fixed;
    z-index: 10;
    background: #E9212E;
    right: 10px;
    bottom: 10px;
    color: #fff;
    padding: 0 15px;
    cursor: pointer;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    transition: all .4s;
    padding-top: 4px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .ln-order-btn:hover {
    box-shadow: 0 3px 10px rgb(255, 84, 84);
  }
  .ln-order-btn svg {
    margin-right: 15px;
  }
  .ln-req-foot {
    display: flex;
    justify-content: flex-end;
  }
</style>
