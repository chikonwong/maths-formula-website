<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- This is sidebar button -->
      <div class="d-sm-block d-md-none">
        <b-button v-b-toggle.sidebar-backdrop
          ><b-icon icon="menu-button-wide"></b-icon
        ></b-button>
      </div>
      <!-- This is Maths Formula for HKDSE brand -->
      <b-navbar-brand>Maths Formula for HKDSE</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- language button -->
          <b-nav-item-dropdown text="language" right>
            <b-dropdown-item @click="switchLang('en')" variant="info"
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
