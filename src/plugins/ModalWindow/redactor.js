export default {
  install(Vue) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    Vue.prototype.$redactor = {
      EvenBus: new Vue(),

      closeEdit() {
        this.EventBus.$emit("hideEdit", () => {
          this.closeName = "";
        });
      },
      hide() {
        this.EvenBus.$emit("hideEdit");
      },
    };
  },
};
