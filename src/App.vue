<template>
  <div id="app">
    <div>
      <h1>My Personal Cost</h1>
    </div>
    <div class="menu">
      <a href="#PageAbout">PageAbout</a> /
      <a href="#PageDashboard">PageDashboard</a>/
      <a href="#Page404">Page404</a>
      <!-- <a href="#" @click="goToPage('PageDashboard')">PageDashboard</a>
      /
      <a href="#" @click="goToPage('PageAbout')">PageAbout</a> -->
    </div>
    <div class="content">
      <PageDashboard v-if="pageName === 'PageDashboard'" />
      <PageAbout v-if="pageName === 'PageAbout'" />
      <Page404 v-if="pageName === 'Page404'" />
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
import PageDashboard from "./views/PageDashboard.vue";
import PageAbout from "./views/PageAbout.vue";
import Page404 from "./views/Page404.vue";
// import AddPay from "./components/AddPay.vue";
export default {
  name: "App",
  data() {
    return {
      show: false,
      page: 1,
      count: 10,
      pageName: "",
    };
  },
  components: {
    // AddPay,
    Pagination,
    PaymentsDisplay,
    AddPaymentForm,
    PageDashboard,
    PageAbout,
    Page404,
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
    setPage() {
      this.pageName = location.hash.slice(1);
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
  mounted() {
    this.setPage();
    window.addEventListener("hashchange", () => {
      console.log("hashchange");
      this.setPage();
    });
  },
};
</script>

<style lang="scss" scoped module>
.header {
  font-size: 20px;
}
</style>
