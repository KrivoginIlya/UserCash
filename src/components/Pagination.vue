<template>
  <v-row class="nav">
    <v-col cols="15">
      <v-btn
        class="mx-1"
        fab
        depressed
        x-small
        color="white"
        @click="onClick(cur - 1)"
        ><v-icon dark> mdi-minus </v-icon></v-btn
      >
      <v-btn
        class="mx-1"
        fab
        small
        depressed
        color="white"
        v-for="i in pageCount"
        :key="i"
        @click="onClick(i)"
      >
        {{ i }}
      </v-btn>
      <v-btn
        class="mx-1"
        fab
        x-small
        depressed
        color="white"
        @click="onClick(cur + 1)"
        ><v-icon dark> mdi-plus </v-icon></v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Paginations",
  props: {
    length: Number,
    cur: Number,
    count: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //Подсчёт страниц
    pageCount() {
      return Math.ceil(this.length / this.count);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.pageCount) {
        return;
      }
      this.$emit("changePage", p);
    },
  },
  created() {},
};
</script>
<style>
.nav {
  display: flex;
  align-items: center;
}
</style>
