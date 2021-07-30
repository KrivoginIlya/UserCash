<template>
  <div class="wrapper">
    <div class="header">
      {{ settings.header }}
    </div>
    <div class="content">
      <transition name="fade">
        <AddPaymentForm
          @addNewPayment="addNewPaymentData"
          :category-list="categoryList"
          v-if="settings.compName === 'add'"
        />
        <Auth v-if="settings.compName === 'auth'" />
      </transition>
    </div>
    <div class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import AddPaymentForm from "./AddPaymentForm.vue";
import Auth from "./Auth.vue";

export default {
  name: "ModalWindow",
  props: {
    settings: {
      type: Object,
    },
  },
  components: {
    AddPaymentForm,
    Auth,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    onCloseClick() {
      this.$modal.hide();
    },
  },
  computed: {
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  created() {
    this.$store.dispatch("fetchCategoryList");
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 200px;
  left: 200px;
  padding: 20px;
  background: #e3e3e3;
}
.fade-enter-active,
.fade-leave-activ {
  transition: opacity 1.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
