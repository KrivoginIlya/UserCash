<template>
  <div class="auth">
    AUTH
    {{ propArray }}
  </div>
</template>

<script>
export default {
  name: "Auth",
  props: {
    propArray: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
