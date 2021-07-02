<template>
  <div class="payForm">
    <input placeholder="Date" type="text" v-model.trim="date" />
    <input placeholder="Category" v-model.trim="category" />
    <input placeholder="Cash" type="number" v-model.number="value" />
    <button @click="onClick()">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddPayForm",
  data() {
    return {
      date: "",
      category: "",
      value: 0,
    };
  },
  methods: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    onClick() {
      const { value, category } = this;
      const data = {
        value,
        category,
        date: this.date || this.getCurrentDate(),
      };
      this.$emit("addNewPay", data);
    },
  },
};
</script>

<style></style>
