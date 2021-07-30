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
    <br />
    <AddPayStok @AddNewStokPay="AddToStokPay" />
  </div>
</template>

<script>
import AddPayStok from "./AddPayStok.vue";
export default {
  name: "AddPaymentForm",
  components: {
    AddPayStok,
  },
  props: ["categoryList"],
  items: {
    type: Array,
    default: () => [],
  },

  data() {
    return {
      date: "",
      category: "Food",
      value: 0,
    };
  },
  methods: {
    AddToStokPay(value) {
      this.category = value.category;
      this.value = Number(value.value);
      this.date = this.getCurrentDate();
    },
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
        id: this.$store.state.paymentsList.length + 1,
        date: this.date || this.getCurrentDate(),
        category,
        value,
      };
      console.log(data);
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style></style>
