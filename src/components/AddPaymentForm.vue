<template>
  <div class="payment-form">
    <input placeholder="Date" type="text" v-model.trim="date" />
    <select v-model="category">
      <option v-for="(item, idx) in categoryList" :value="item" :key="idx">
        {{ item }}
      </option>
    </select>
    <input placeholder="Amout" type="number" v-model.number="value" />
    <button @click="onClick">Save</button>
    <button @click="value = 200">200</button>
    <button @click="value = 50">50</button>
    <button @click="onClick1">2200</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: ["categoryList"],
  data() {
    return {
      date: "",
      category: "Food",
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
      const { category, value } = this;
      const data = {
        date: this.date || this.getCurrentDate(),
        category,
        value,
      };
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style></style>
