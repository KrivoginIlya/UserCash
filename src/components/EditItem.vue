<template>
  <div class="editString">
    <input type="date" v-model="date" />
    <input type="text" placeholder="category" v-model="category" />
    <input type="number" placeholder="cash" v-model="value" />
    <button class="savebtn" @click="saveEdit">save</button>
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
