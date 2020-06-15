<template>
  <div class="ln-dropdown" :class="[customClass, {'open':show}]">
    <div class="ln-dropdown-active" v-on:click="show = !show">
      <slot name="active"></slot>
    </div>

    <div class="ln-dropdown-slide">
      <slide-up-down :active="show" :duration="600">
      <ul class="ln-dropdown-list"  @click="close()">
        <slot name="items"></slot>
      </ul>
      </slide-up-down>
    </div>



  </div>
</template>

<script>
  export default {
    props: {
      customClass: {
        type: String,
        default: 'ln-dropdown-default'
      },
      closeAfterClick: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      close() {
        if(this.closeAfterClick) {
          this.show = false;
        }
      }
    }

  }
</script>
