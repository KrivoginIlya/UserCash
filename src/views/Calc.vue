<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="https://appstudio.org/wp-content/uploads/2017/10/Icons-03-uai-258x258.png"
    />
    <Calculete msg="Welcome to Your Vue.js App" />
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
