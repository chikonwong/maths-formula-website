<template>
  <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default {
  components: {
    Sidebar,
    Footer,
    Navbar,
  },
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}

.content {
  /* height of footer */
  margin-bottom: 100px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: 60px; */
}

/* .sidebar {
  background-color: aquamarine;
  width: 20%;
  position: absolute;
  height: 100%;
  text-align: center;
} */
</style>
