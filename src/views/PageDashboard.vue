<template>
  <div>
    <div class="wrapper"></div>

    <br />

    <div>Total Coast = {{ getFullValue }}</div>

    <PaymentsDisplay :items="curElements" />
    <Pagination
      :length="paymentListLength"
      @changePage="onPage"
      :count="count"
      :cur="page"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "PageDashboard",
  components: {
    Pagination: () => import("../components/Pagination.vue"),
    PaymentsDisplay: () => import("../components/PaymentsDisplay.vue"),
  },
  data() {
    return {
      page: 1,
      count: 10,
      pageName: "",
      redactorName: false,
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList", "delpay"]),
    ...mapActions({
      // fetchCategoryList: "addCategory",
      fetchListData: "fetchData",
    }),
    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    setDeletePayment(value) {
      this.delpay(value);
    },
    onPage(p) {
      this.page = p;
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
    this.page = Number(this.$route.params.page) || 1;
  },
};
</script>

<style></style>
