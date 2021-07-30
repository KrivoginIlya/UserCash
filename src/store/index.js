import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    category: [],
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
  },
  getters: {
    getPaymentList: (state) => state.paymentsList,
    getFullPaymentValue: (state) => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    },
    getCategoryFull: (state) => {
      return state.paymentsList.map((i) => i.category);
    },
    getCategoryList: (state) => {
      return state.category;
    },
  },
  actions: {
    someAction({ commit }, res) {
      commit("setPaymentsListData", res);
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
      console.log(" ", newList);

      commit("setPaymentsListData", newList);
    },
  },
});
