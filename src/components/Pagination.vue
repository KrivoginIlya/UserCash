<template>
  <div class="nav">
    <div class="page" @click="onClick(cur - 1)">-</div>
    <div class="page" v-for="i in pageCount" :key="i" @click="onClick(i)">
      {{ i }}
    </div>
    <div class="page" @click="onClick(cur + 1)">+</div>
  </div>
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
};
</script>
<style>
.nav {
  display: flex;
}
.page {
  font-size: 30px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
}
.page:hover {
  background: gray;
}
</style>
