<template>
  <v-row>
    <v-col cols="7">
      <div class="text-h3 text-md-h2 text-xl-h1 ma-3">My personal Costs</div>
      <v-btn
        color="teal"
        dark
        depressed
        @click="showPaymentForm"
        @mouseover="onParams"
      >
        ADD NEW COST <v-icon>mdi-plus</v-icon>
      </v-btn>

      <PaymentsDisplay :items="curElements" show />
      <Pagination
        :length="paymentListLength"
        @changePage="onPage"
        :count="count"
        :cur="page"
      />
      <div class="text-h5 ma-4">Total Coast = {{ getFullValue }}</div>
    </v-col>

    <v-col cols="5">
      <div>
        <Chart />
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "PageDashboard",
  components: {
    Chart: () => import("../components/ChartLine.vue"),
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
      fetchListData: "fetchData",
    }),
    onParams() {
      this.$router.push({
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

    showPaymentForm() {
      this.$modal.show("add", { header: "My New Cost", compName: "add" });
    },

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
    ...mapGetters(["getFullPaymentValue", "getSumSport"]),
    getSumSportPay() {
      return this.getSumSport;
    },
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
