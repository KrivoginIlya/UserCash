<template>
  <div class="payments-list">
    <div class="item" v-for="(item, idx) in items" :key="idx">
      <table>
        <thead>
          <td>{{ idx + 1 }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
          <td>
            <button class="edit" @click="onLog(item.id, item)" :key="idx">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path
                  d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                />
              </svg>
            </button>
          </td>
        </thead>
      </table>
    </div>
    <div>
      <Redactor
        class="redactor"
        v-if="compName === 'editItem'"
        @close="closeEdit"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  data() {
    return {
      compName: "",
    };
  },
  components: {
    Redactor: () => import("./Redactor.vue"),
  },

  methods: {
    closeEdit(name) {
      this.compName = name;
    },
    onLog(id) {
      this.compName = "editItem";
      this.$store.state.editId = id;
    },
  },
  props: {
    items: {
      type: Array,
    },
  },
  mounted() {},
};
</script>
<style>
.payments-list {
  width: 50%;
}
.edit {
  border: none;
  background-color: inherit;
  cursor: pointer;
}
.edit :hover {
  background-color: rgb(245, 244, 244);
}
td {
  text-align: center;
  width: 250px;
  padding-bottom: 15px;
}
.redactor {
  top: 10%;
  left: 40%;
  position: absolute;
}
</style>
