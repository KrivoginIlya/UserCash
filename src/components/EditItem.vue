<template>
  <div class="editString">
    <v-text-field v-model="date" placeholder="Date" />
    <v-text-field type="text" placeholder="Category" v-model="category" />
    <v-text-field type="number" placeholder="Cash" v-model="value" />
    <v-btn color="teal" dark class="ma-2" @click="onClick">Save</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      category: "",
      value: 0,
      itemEdit: {},
    };
  },
  methods: {
    saveEdit() {
      const data = {
        id: this.$store.state.editId,
        date: this.date,
        category: this.category,
        value: Number(this.value),
      };
      this.$store.dispatch("editPayItem", data);
      console.log(data.id);
    },
  },
};
</script>

<style>
input {
  width: 155px;
  cursor: pointer;
}
.savebtn {
  cursor: pointer;
  font-size: 16px;
  background: rgb(127, 243, 127);
  color: black;
}
.savebtn :hover {
  color: aliceblue;
}
.editString {
  display: inline;
  width: 170px;
}
</style>
