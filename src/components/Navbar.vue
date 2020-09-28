<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="d-sm-block d-md-none">
        <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>
      </div>

      <b-navbar-brand>Maths Formula for HKDSE</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              ><b-icon icon="search"></b-icon
            ></b-button>
          </b-nav-form>
          <!-- language button -->
          <b-nav-item-dropdown text="language" right>
            <b-dropdown-item @click="switçchLang('en')" variant="info"
              >ENG</b-dropdown-item
            >
            <b-dropdown-item @click="switchLang('tw')" variant="info"
              >TW</b-dropdown-item
            >
            <b-dropdown-item @click="switchLang('cn')" variant="info"
              >CN</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("locale", lang);
      console.log("clicked");
    },
  },
};
</script>
