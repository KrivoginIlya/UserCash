import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import modal from "./plugins/ModalWindow";
import redactor from "./plugins/ModalWindow/redactor";
import vuetify from "./plugins/vuetify";
import Chart from "chart.js";

Vue.config.productionTip = false;
Vue.use(modal);
Vue.use(redactor);

new Vue({
  Chart,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
