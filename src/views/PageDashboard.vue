<template>
  <div>
    <div class="wrapper">
      <button @click="onParams()">ADD NEW COST +</button>
    </div>

    <AddPaymentForm
      @addNewPayment="addNewPaymentData"
      :category-list="categoryList"
      v-if="show"
    />
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
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "PageDashboard",
  components: {
    Pagination,
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: true,
      page: 1,
      count: 10,
      pageName: "",
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    onParams() {
      this.show = !this.show;
      this.$router.push({
        name: "PageDashboard",
        query: {
          categoryF: "Food",
          categoryT: "Transport",
          categoryE: "Education",
          valueF: 200,
          valueT: 50,
          valueE: 2000,
        },
      });
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
    // console.log(this.$route);
    this.page = Number(this.$route.params.page) || 1;
  },
};
</script>

<style></style>
