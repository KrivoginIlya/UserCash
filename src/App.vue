<template>
  <v-app>
    <v-app-bar app flat color="teal lighten-2" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-btn class="ma-2" depressed @click="goToPage('PageDashboard')"
              >PageDashboard</v-btn
            >

            <v-btn class="ma-2" depressed @click="goToPage('Calc')"
              >Calculator</v-btn
            >

            <v-btn class="ma-2" depressed @click="goToPage('PageAbout')"
              >PageAbout</v-btn
            >
            <router-view />
          </v-col>
        </v-row>

        <ModalWindow v-if="modalWindowName" :settings="settings" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      page: 1,
      count: 10,
      pageName: "",
      modalWindowName: "",
      settings: {},
    };
  },
  components: {
    ModalWindow: () => import("./components/ModalWindow.vue"),
  },
  methods: {
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },
    onShow(settings) {
      this.modalWindowName = settings.name;
      this.settings = settings.settings;
    },
    onHide() {
      this.modalWindowName = "";
      this.settings = {};
    },
  },
  created() {
    // if (!this.fetchListData.length) {
    //   this.fetchListData();
    // }
    // this.$store.dispatch("fetchCategoryList");
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
};
</script>
