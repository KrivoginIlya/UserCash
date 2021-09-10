<template>
  <div>
    <PieChart
      :donut="true"
      :chart-data="datacollection"
      :options="{ donut: true }"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PieChart from "./chartMy";
export default {
  name: "ChartLine",
  components: {
    PieChart,
  },
  data() {
    return {
      datacollection: null,
      loader: false,
      // dataChart: [],
    };
  },
  methods: {
    ...mapGetters([
      "getFullPaymentValue",
      "getSumSport",
      "getSumFood",
      "getSumCar",
      "getSumTransport",
      "getSumEducations",
      "getSumLife",
      "getSumInternet",
    ]),
    sumSum() {
      setTimeout(() => {
        this.$store.dispatch("setChartData", [
          this.getSumSport,
          this.getSumFood,
          this.getSumCar,
          this.getSumTransport,
          this.getSumEducations,
          this.getSumLife,
          this.getSumInternet,
        ]);
      }, 1500);
    },

    fillData() {
      setTimeout(() => {
        this.datacollection = {
          labels: [
            "Sport",
            "Food",
            "Car",
            "Transport",
            "Educations",
            "life",
            "Internet",
          ],

          datasets: [
            {
              label: "My Personal Cost",

              backgroundColor: [
                "red ",
                "purple ",
                "blue",
                "green",
                "#33CCCC",
                "#1DD300",
                "orange",
              ],
              pointBackgroundColor: "blue",
              borderWidth: 1,

              data: this.dataChart,
            },
          ],
        };
      }, 2000);
    },
  },
  computed: {
    ...mapGetters([
      "getSumSport",
      "getSumFood",
      "getSumCar",
      "getSumTransport",
      "getSumEducations",
      "getSumLife",
      "getSumInternet",
      "getDataChart",
    ]),
    sumSport() {
      return this.getSumSport;
    },
    dataChart() {
      return this.getDataChart;
    },
  },
  mounted() {
    this.sumSum();
    this.fillData();
  },
  created() {
    this.$store.dispatch("fetchCartValue");
    this.fillData();
  },
};
</script>

<style></style>
