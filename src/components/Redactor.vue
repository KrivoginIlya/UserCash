<template>
  <div class="redactor">
    Edit String № {{ this.$store.state.editId }}
    <button class="btn" @click="deleteItem">del</button>
    <button class="btn" @click="showInput = !showInput">edit</button>
    <button class="btn exit" @click="close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
        />
      </svg>
    </button>
    <EditItem v-if="showInput" />
  </div>
</template>

<script>
export default {
  name: "Redactor",
  data() {
    return {
      showInput: false,
    };
  },
  components: {
    EditItem: () => import("./EditItem.vue"),
  },

  methods: {
    editItem() {},
    close() {
      this.$emit("close", (this.name = ""));
    },
    deleteItem() {
      this.$store.dispatch("deletePayItem", this.$store.state.editId);
    },
  },
};
</script>

<style>
.btn {
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}
.exit {
  width: 25px;
  position: absolute;
  top: 0%;
  left: 100%;
  border: none;
  background: white;
}
.exit :hover {
  color: red;
}
.redactor {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  background: grey;
  padding: 10px 20px 10px 20px;
}
</style>
