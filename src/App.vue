<template>


  <div>
    <Navbar></Navbar>
    <Sidebar id="sidebar"></Sidebar>
    <b-container >
      <b-col >
        <router-view></router-view>
      </b-col>
    </b-container>
    <Footer></Footer>
  </div>



</template>

<script>
  import Sidebar from './components/Sidebar'
  import Footer from './components/Footer'
  import Navbar from './components/Navbar'

  export default {
    components: {
      Sidebar,
      Footer,
      Navbar
    }
  }
</script>

<style>

</style>