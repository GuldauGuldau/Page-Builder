window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = require('vue');

import SlideUpDown from 'vue-slide-up-down';
import VueTrix from "vue-trix";
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';
import Vuebar from 'vuebar';
import VueAgile from 'vue-agile';
import VueTheMask from 'vue-the-mask';

Vue.use(Vuebar);
Vue.use(Tooltip);
Vue.use(VueAgile);
Vue.use(VueTheMask);

Vue.component('v-agile', VueAgile);
Vue.component('vue-trix', VueTrix);
Vue.component('slide-up-down', SlideUpDown);

Vue.component('modal', require('./components/BaseModal.vue').default);
Vue.component('bid', require('./components/Bid.vue').default);
Vue.component('bid-btn', require('./components/BidBtn.vue').default);
Vue.component('base-dropdown-menu', require('./components/BaseDropdownMenu.vue').default);
Vue.component('call', require('./components/Call.vue').default);
Vue.component('call-btn', require('./components/CallBtn.vue').default);

Vue.component('builder', require('./components/Builder/Builder.vue').default);
Vue.component('about-1', require('./components/Builder/About1.vue').default);
Vue.component('about-2', require('./components/Builder/About2.vue').default);
Vue.component('about-3', require('./components/Builder/About3.vue').default);
Vue.component('feature-1', require('./components/Builder/Feature1.vue').default);
Vue.component('feature-2', require('./components/Builder/Feature2.vue').default);
Vue.component('contact-1', require('./components/Builder/Contact1.vue').default);
Vue.component('contact-2', require('./components/Builder/Contact2.vue').default);
Vue.component('partner-1', require('./components/Builder/Partner1.vue').default);
Vue.component('price-1', require('./components/Builder/Price1.vue').default);
Vue.component('project-1', require('./components/Builder/Project1.vue').default);
Vue.component('project-2', require('./components/Builder/Project2.vue').default);
Vue.component('project-3', require('./components/Builder/Project3.vue').default);
Vue.component('service-1', require('./components/Builder/Service1.vue').default);
Vue.component('service-2', require('./components/Builder/Service2.vue').default);
Vue.component('banner-1', require('./components/Builder/Banner1.vue').default);
Vue.component('banner-2', require('./components/Builder/Banner2.vue').default);
Vue.component('banner-3', require('./components/Builder/Banner3.vue').default);
Vue.component('sale-1', require('./components/Builder/Sale1.vue').default);
Vue.component('info-1', require('./components/Builder/Info1.vue').default);
Vue.component('gallery-1', require('./components/Builder/Gallery1.vue').default);
Vue.component('quote-1', require('./components/Builder/Quote1.vue').default);
Vue.component('edit', require('./components/Builder/Edit.vue').default);
Vue.component('select-icon', require('./components/BaseSelectIcon.vue').default);
Vue.component('upload-file', require('./components/Builder/UploadFile.vue').default);
Vue.component('base-map', require('./components/BaseMap.vue').default);
Vue.component('base-gallery', require('./components/BaseGallery.vue').default);
Vue.component('upload-btn', require('./components/Builder/UploadBtn.vue').default);

const app = new Vue({
    el: '#app'
});
