import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    category: [],
    dataChart: [],
    editId: 0,
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addDataToPaymentList(state, payload) {
      state.paymentsList.push(payload);
    },
    addCategory(state, paylod) {
      state.category = paylod;
    },
    addDataChart(state, paylod) {
      state.dataChart = paylod;
    },
    setDataChart(state, paylod) {
      state.dataChart = paylod;
    },
  },
  getters: {
    getPaymentList: (state) => state.paymentsList,
    // Category Sum
    getSumSport: (state) => {
      const sport = state.paymentsList.filter(
        (item) => item.category === "Sport"
      );
      return sport.reduce((sum, item) => sum + item.value, 0);
    },
    getSumFood: (state) => {
      const sport = state.paymentsList.filter(
        (item) => item.category === "Food"
      );
      return sport.reduce((sum, item) => sum + item.value, 0);
    },
    getSumCar: (state) => {
      const sport = state.paymentsList.filter(
        (item) => item.category === "Car"
      );
      return sport.reduce((sum, item) => sum + item.value, 0);
    },
    getSumTransport: (state) => {
      const sport = state.paymentsList.filter(
        (item) => item.category === "Transport"
      );
      return sport.reduce((sum, item) => sum + item.value, 0);
    },
    getSumEducations: (state) => {
      const sport = state.paymentsList.filter(
        (item) => item.category === "Education"
      );
      return sport.reduce((sum, item) => sum + item.value, 0);
    },
    getSumLife: (state) => {
      const sport = state.paymentsList.filter(
        (item) => item.category === "Life"
      );
      return sport.reduce((sum, item) => sum + item.value, 0);
    },
    getSumInternet: (state) => {
      const sport = state.paymentsList.filter(
        (item) => item.category === "Internet"
      );
      return sport.reduce((sum, item) => sum + item.value, 0);
    },
    // End
    getFullPaymentValue: (state) => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    },
    getCategoryList: (state) => {
      return state.category;
    },
    getDataChart: (state) => {
      return state.dataChart;
    },
  },
  actions: {
    someAction({ commit }, res) {
      commit("setPaymentsListData", res);
    },
    fetchCartValue({ commit, state }) {
      setTimeout(() => {
        // const arrCart = [];
        // const sport = this.state.paymentsList.filter(
        //   (item) => item.category === "Sport"
        // );
        // console.log(sport);
        // const sportN = sport.reduce((sum, item) => sum + item.value, 0);
        // arrCart.push(sportN);

        const res = state.paymentsList.reduce((acc, curr) => {
          if (!acc.length) {
            acc.push({ category: curr.category, value: curr.value });
            return acc;
          }
          const index = acc.findIndex(
            (item) => item.category === curr.category
          );
          if (index > -1) {
            acc[index].value = acc[index].value + curr.value;
          } else {
            acc.push({ category: curr.category, value: curr.value });
          }
          return acc;
        }, []);

        const arrCart = [
          res.find(({ category }) => category === "Sport").value,
          res.find(({ category }) => category === "Food").value,
          res.find(({ category }) => category === "Car").value,
          res.find(({ category }) => category === "Transport").value,
          res.find(({ category }) => category === "Education").value,
          res.find(({ category }) => category === "Life").value,
          res.find(({ category }) => category === "Internet").value,
        ];
        console.log(arrCart);
        commit("addDataChart", arrCart);
      }, 2000);
    },
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            "Car",
            "Life",
            "Sport",
            "Food",
            "Transport",
            "Education",
            "Internet",
          ]);
        }, 500);
      }).then((res) => commit("addCategory", res));
    },
    fetchData({ dispatch }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 100; i++) {
            items.push({
              id: i,
              date: "01.07.2021",
              category:
                this.state.category[
                  Math.floor(Math.random() * this.state.category.length)
                ],
              value: Math.floor(Math.random() * 1000),
            });
          }
          resolve(items);
        }, 1000);
      }).then((res) => dispatch("someAction", res));
    },
    deletePayItem({ commit, state }, id) {
      const newList = state.paymentsList.filter((item) => item.id !== id);
      commit("setPaymentsListData", newList);
    },
    editPayItem({ commit, state }, data) {
      const newList = state.paymentsList.filter((item) => item.id !== data.id);
      newList.push(data);
      newList.sort((a, b) => a.id - b.id);

      commit("setPaymentsListData", newList);
    },
    addChartData({ commit, state }, data, index) {
      const newValue = state.chartData[index] + data;
      state.chartData[index] = newValue;
      console.log("newValue");
      commit("addDataChart", [...state.chartData]);
    },
    setChartData({ commit }, data) {
      commit("setChartData", [...data]);
    },
  },
});
