import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import modal from "./plugins/ModalWindow";
import redactor from "./plugins/ModalWindow/redactor";

Vue.config.productionTip = false;
Vue.use(modal);
Vue.use(redactor);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
