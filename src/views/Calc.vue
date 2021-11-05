<template>
  <div class="home">
    <Calculete />
  </div>
</template>

<script>
  import Calculete from "@/components/Calculete.vue";

  export default {
    name: "Calc",
    components: {
      Calculete,
    },
  };
</script>
<style>
  .home {
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }
</style>
