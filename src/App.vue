<template>
  

   <div>
      <Navbar></Navbar>
      <b-row>
        
        <b-col md="3">
          <Sidebar id="sidebar"></Sidebar>
        </b-col>
        <b-col md="9">
          <router-view></router-view>
        </b-col>
      </b-row>
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
