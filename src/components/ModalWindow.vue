<template>
  <div class="wrapper">
    <div class="header">
      {{ settings.header }}
    </div>
    <div class="content">
      <component
        :is="settings.compName"
        :date="date"
        :categoryList="settings.category"
      />
    </div>
    <div class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import Auth from "./Auth.vue";
export default {
  name: "ModalWindow",
  components: {
    AddPaymentForm,
    Auth,
  },
  props: {
    settings: {
      type: Object,
    },
  },
  data() {
    return {
      date: new Date(),
    };
  },
  methods: {
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 20px;
  position: absolute;
  background: #e3e3e3;
  top: 0px;
}
</style>
