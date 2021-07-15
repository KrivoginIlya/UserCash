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
        category: this.$route.params.categoryF,
        value: this.$route.params.valueF,
      };
      console.log(data);
      this.$emit("AddNewStokPay", data);
    },
    value50() {
      const data = {
        date: "",
        category: this.$route.params.categoryT,
        value: this.$route.params.valueT,
      };
      console.log(data);
      this.$emit("AddNewStokPay", data);
    },
    value2000() {
      const data = {
        date: "",
        category: this.$route.params.categoryE,
        value: this.$route.params.valueE,
      };
      console.log(data);
      this.$emit("AddNewStokPay", data);
    },
  },
};
</script>

<style></style>
