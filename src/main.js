import Vue from 'vue';
import {
  MdButton, MdIcon, MdProgress, MdSnackbar, MdToolbar,
} from 'vue-material/dist/components';
import App from './app/App.vue';
import router from './app/router';

import '@/styles/minty.css';
import '@/styles/app.css';
import '@/styles/theme.scss';
import 'vue-material/dist/vue-material.min.css';

Vue.use(MdIcon);
Vue.use(MdButton);
Vue.use(MdToolbar);
Vue.use(MdSnackbar);
Vue.use(MdProgress);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
