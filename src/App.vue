<template>
  <div id="app">
    <div>
      <h1>My personal costs</h1>
    </div>

    <div>
      <button class="btnCost" @click="show = !show">ADD NEW COST +</button>
      <AddPayForm @addNewPay="addNewData" v-if="show" />
      <PayDisplay :items="payList" />
    </div>
  </div>
</template>
<script>
import PayDisplay from "./components/PayDisplay.vue";
import AddPayForm from "./components/AddPayForm.vue";
export default {
  name: "App",
  components: {
    PayDisplay,
    AddPayForm,
  },
  data() {
    return {
      show: false,
      payList: [],
    };
  },
  methods: {
    addNewData(value) {
      this.payList = [...this.payList, value];
    },
    fetchData() {
      return [
        { date: "12.02.2020", category: "Food", value: 5500 },
        { date: "12.02.2019", category: "sport", value: 4432 },
        { date: "12.02.2019", category: "Car", value: 444332 },
        { date: "12.02.2021", category: "House", value: 3423 },
      ];
    },
  },
  created() {
    this.payList = this.fetchData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
