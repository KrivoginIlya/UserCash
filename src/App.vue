<template>
  <div id="app">
    <div>
      <h1>My Personal Cost</h1>
    </div>
    <div class="menu">
      <a href="#" @click="goToPage('PageDashboard')">PageDashboard</a>
      /
      <a href="#" @click="goToPage('PageAbout')">PageAbout</a>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="wrapper">
      <button class="btnCost" @click="show = !show">ADD NEW COST +</button>

      <AddPaymentForm
        @addNewPayment="addNewPaymentData"
        :category-list="categoryList"
        v-if="show"
      />
      <br />
      <PaymentsDisplay :items="curElements" />
      <Pagination
        :length="paymentListLength"
        @changePage="onPage"
        :count="count"
        :cur="page"
      />
      <div>Total Coast = {{ getFullValue }}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
// import AddPay from "./components/AddPay.vue";

export default {
  name: "App",
  data() {
    return {
      show: false,
      page: 1,
      count: 10,
    };
  },
  components: {
    // AddPay,
    Pagination,
    PaymentsDisplay,
    AddPaymentForm,
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    onPage(p) {
      this.page = p;
    },
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    getFullValue() {
      return this.getFullPaymentValue;
    },
    paymentList() {
      return this.$store.getters.getPaymentList;
    },
    paymentListLength() {
      return this.$store.getters.getPaymentList.length;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    curElements() {
      const { count, page } = this;
      return this.paymentList.slice(
        count * (page - 1),
        count * (page - 1) + count
      );
    },
  },
  created() {
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
    this.$store.dispatch("fetchCategoryList");
  },
};
</script>

<style lang="scss" scoped module>
.header {
  font-size: 20px;
}
</style>
