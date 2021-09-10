<template>
  <v-container>
    <v-row class="font-weight-medium elevation-1">
      <v-col cols="1">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="4">Category</v-col>
      <v-col cols="2">Cash</v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row class="elevation-1" v-for="(item, idx) in items" :key="idx">
      <v-col cols="1">{{ item.id }}</v-col>
      <v-col cols="4">{{ item.date }}</v-col>
      <v-col cols="4">{{ item.category }}</v-col>
      <v-col cols="2">{{ item.value }}</v-col>
      <v-col cols="1">
        <v-btn
          icon
          color="gray"
          class="edit"
          @click="onLog(item.id, item)"
          :key="idx"
        >
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
            />
          </svg>
        </v-btn>
      </v-col>
    </v-row>

    <div class="editWindow">
      <Redactor v-if="compName === 'editItem'" @close="closeEdit" />
    </div>
  </v-container>
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
.editWindow {
  top: 60%;
  left: 65%;
  position: absolute;
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
</style>
