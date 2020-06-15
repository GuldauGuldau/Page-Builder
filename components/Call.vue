<template>
  <div>
    <modal
    :show="isShow"
    @close="isShow = false"
    >
    <div class="ln-req call">
      <div class="ln-req-title">
        <span>Заказать обратный звонок</span>
      </div>
      <div class="ln-req-text">
        Оставьте номер телефона и мы перезвоним Вам!
      </div>

      <div class="ln-req-group">
        <label class="ln-base-label">Номер телефона (например +7 (999) 999-99-99)</label>
        <the-mask
          :mask="['+7(###) ###-##-##']"
          type="text"
          placeholder="Номер телефона"
          name="phone"
          class="ln-base-input"
          autocomplete="off"
          v-model="phone"
          :class="{'error': error}"
          :masked="true"
        />
        </the-mask>

        <div class="ln-req-error-message" v-if="errorMessage">Невозможно отправить!</div>
      </div>

      <div class="ln-req-call-alert" v-if="showAlert">
        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  fill="black" d="M6.46381 11.4962L4.12865 8.14862C3.35547 7.04021 -0.675155 9.85175 0.09803 10.9602L4.44316 17.1893C5.21636 18.2977 6.75587 18.572 7.86428 17.7988C8.17945 17.579 8.4246 17.2959 8.59998 16.9797L8.60198 16.9807C8.60198 16.9807 8.60739 16.9685 8.61178 16.9586C8.6677 16.8555 8.71715 16.7495 8.75761 16.6401C9.65173 14.7159 14.3867 4.99428 21 0C21 2.67788e-07 12.6722 0.210372 6.46381 11.4962Z"/>
        </svg>
        <div>Успешно отправлено!</div>
      </div>
      <div class="ln-btn-default" @click="sendPhone">Отправить</div>
    </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      phone: '',
      error: false,
      showAlert: false,
      company_id: null,
      errorMessage: false
    }
  },
  methods: {
    showForm(company_id) {
      this.isShow = true;
      this.company_id = company_id;
    },
    sendPhone(company_id) {
      this.error = false;
      if(this.phone.length < 10) {
        this.error = true;
        return;
      }
      if(this.company_id === null) return;
      axios
      .post('/calls', {
        phone: this.phone,
        company_id: this.company_id
      })
      .then(response => {
        localStorage.setItem('call', this.phone);
        this.alert();
      }).catch(error => {
        if (error.response) {
          this.errorMessage = true;
          console.log(error.response);
        }
      });

    },
    getPhone() {
      if(localStorage.getItem('call')) {
        this.phone = localStorage.getItem('call');
      }
    },
    alert() {
      this.showAlert = true;
      setTimeout(function(){
        this.showAlert = false;
        this.isShow = false;
      }.bind(this), 1000)
    },
  },
  mounted() {
    this.getPhone();
  }
}
</script>

<style>
  .ln-req .ln-base-input:focus {
    border: 1px solid var(--text-color-tint60);
  }
  .ln-req.call {
    position: relative;
  }
  .ln-req-call-alert {
    position: absolute;
    background: #fff;
    top: 80px;
    height: calc(100% - 100px);
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  .ln-req-call-alert svg {
      padding-bottom: 10px;
  }
</style>
