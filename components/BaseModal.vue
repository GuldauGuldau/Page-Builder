<template>
  <transition name="modal">
    <div class="ln-modal" v-show="show">
        <div class="ln-modal-wrapper" :class="[widthModal]">
          <div class="ln-modal-close" v-if="isClose" @click="close()">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1.67397L11.3306 0L7.49453 3.81096C6.92623 4.38082 6.03825 4.38082 5.46994 3.81096L1.6694 0L0 1.67397L3.80055 5.48493C4.36885 6.05479 4.36885 6.94521 3.80055 7.51507L0 11.326L1.6694 13L5.46994 9.18904C6.03825 8.61918 6.92623 8.61918 7.49453 9.18904L11.2951 13L12.9645 11.326L9.19945 7.51507C8.63115 6.94521 8.63115 6.05479 9.19945 5.48493L13 1.67397Z" fill="black"/>
            </svg>
          </div>
          <div class="ln-modal-modal">

              <slot></slot>

          </div>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: 'number',
  props: {
    title: {
      type: String,
      default: null
    },
    isClose: {
      type: Boolean,
      default: true
    },
    isAction: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    widthModal: {
      type: String,
      default: ''
    },
  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  watch: {

  },
  mounted() {

  }
}
</script>

<style scoped>
  .ln-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0,0,0,.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ln-modal-close {
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
    z-index: 1;
  }
  .ln-modal-wrapper {
    background: #fff;
    max-width: 500px;
    position: relative;
    transition: all .2s;
  }
  .ln-modal-wrapper.lg {
    max-width: 620px;
  }
  .ln-modal-wrapper.ln-modal-contact {
    max-width: 700px;
  }
  .modal-enter .ln-modal-wrapper,
  .modal-leave-to .ln-modal-wrapper{
    opacity: 0;
  }
  .modal-enter-active .ln-modal-wrapper, .modal-leave-active .ln-modal-wrapper {
    transition: all .2s;
  }

</style>
