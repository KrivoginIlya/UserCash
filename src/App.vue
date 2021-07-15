<template>
  <div id="app">
    <div>
      <h1>My Personal Cost</h1>
    </div>
    <div class="menu">
      <a href="" @click="onShow('PageDashboard')">PageDashboard</a>
      /
      <a href="" @click="onShow('PageAbout')">PageAbout</a>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
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
    };
  },
  methods: {
    onShow(page) {
      this.$router.push({
        name: page,
        // meta: {
        //   categoryF: "Food",
        //   categoryT: "Transport",
        //   categoryE: "Education",
        //   valueF: 200,
        //   valueT: 50,
        //   valueE: 2000,
        // },
      });
    },
  },
  created() {
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
    this.$store.dispatch("fetchCategoryList");
  },
  mounted() {},
};
</script>

<style lang="scss" scoped module>
.header {
  font-size: 20px;
}
</style>
