<template>
  <div>
    <button @click="value200">Food 200$</button>
    <button @click="value50">Transport 50$</button>
    <button @click="value2000">Education 2000$</button>

    <AddStok />
  </div>
</template>

<script>
export default {
  name: "AddPayStok",
  components: {},
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
        category: this.$route.query.categoryF,
        value: this.$route.query.valueF,
      };
      this.$emit("AddNewStokPay", data);
    },
    value50() {
      const data = {
        date: "",
        category: this.$route.query.categoryT,
        value: this.$route.query.valueT,
      };
      this.$emit("AddNewStokPay", data);
    },
    value2000() {
      const data = {
        date: "",
        category: this.$route.query.categoryE,
        value: this.$route.query.valueE,
      };
      this.$emit("AddNewStokPay", data);
    },
  },
};
</script>

<style></style>
