<template>
  <div class="payment-form">
    <div class="inputValue">
      <v-text-field
        :rules="rules"
        placeholder="Date"
        type="text"
        v-model.trim="date"
      />
      <v-select
        v-model="category"
        :items="categoryList"
        label="Category"
        data-vv-name="Category"
        required
      >
      </v-select>
      <v-text-field
        :rules="rules"
        placeholder="Amout"
        type="number"
        v-model.number="value"
      />
      <v-btn color="teal" dark class="ma-2" @click="onClick">Save</v-btn>
    </div>

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
      this.$store.dispatch("fetchCartValue");
      this.$store.dispatch("addChartData", data, 0);
    },
  },
};
</script>

<style>
.inputValue {
  display: flex;
}
</style>
