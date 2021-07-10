<template>
  <div class="payments-list">
    <div class="item" v-for="(item, idx) in items" :key="idx">
      <table>
        <thead>
          <td>{{ item.id }}</td>
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
  name: "PaymentsDisplay",
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
  padding-left: 30px;
  padding-bottom: 15px;
}
</style>
