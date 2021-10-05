<template>
  <div id="app">
    <div>
      <h1>My Personal Cost</h1>
    </div>
    <div class="menu">
      <a class="linkApp" href="" @click="goToPage('PageDashboard')"
        >PageDashboard</a
      >
      /
      <a class="linkApp" href="" @click="goToPage('PageAbout')">PageADDbout</a>
      / <router-link class="linkApp" to="/Calc">Calculator vue</router-link> |
    </div>
    <div class="content">
      <button class="addPay" @click="showPaymentForm" @mouseover="onParams">
        ADD NEW COST +
      </button>

      <router-view></router-view>
    </div>

    <ModalWindow v-if="modalWindowName" :settings="settings" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      page: 1,
      count: 10,
      pageName: "",
      modalWindowName: "",
      settings: {},
    };
  },
  components: {
    ModalWindow: () => import("./components/ModalWindow.vue"),
  },
  methods: {
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },
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
    onShow(settings) {
      this.modalWindowName = settings.name;
      this.settings = settings.settings;
    },
    onHide() {
      this.modalWindowName = "";
      this.settings = {};
    },
  },
  created() {
    // if (!this.fetchListData.length) {
    //   this.fetchListData();
    // }
    // this.$store.dispatch("fetchCategoryList");
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
};
</script>

<style>
.header {
  font-size: 20px;
}
.linkApp {
  background-color: cornflowerblue;
  margin: 50px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: whitesmoke;
  padding: 15px;
}
.addPay {
  margin-left: 50px;
  margin-top: 30px;
  background-color: forestgreen;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: whitesmoke;
  width: 200px;
  height: 40px;
  cursor: pointer;
}
</style>
