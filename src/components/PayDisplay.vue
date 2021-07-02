<template>
  <div class="list">
    <div class="item" v-for="(item, idx) in items" :key="idx">
      <!-- {{ idx + 1 }}-{{ item }} -->
      <table>
        <thead>
          <td>#</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style>
td {
  padding-right: 25px;
  padding-bottom: 10px;
}
</style>
