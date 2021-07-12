<template>
  <div>
    <button @click="value200">Food 200$</button>
    <button @click="value50">Transport 50$</button>
    <button @click="value2000">Education 2000$</button>
  </div>
</template>

<script>
export default {
  name: "AddPayStok",
  data() {
    return {
      date: "",
      category: "",
      value: 0,
    };
  },
  methods: {
    value200() {
      const data = {
        date: "",
        category: "Food",
        value: 200,
      };
      this.$emit("AddNewStokPay", data);
    },
    value50() {
      const data = {
        date: "",
        category: "Transport",
        value: 50,
      };
      this.$emit("AddNewStokPay", data);
    },
    value2000() {
      const data = {
        date: "",
        category: "Education",
        value: 2000,
      };
      this.$emit("AddNewStokPay", data);
    },
  },
};
</script>

<style></style>
