<template>
  <div>

    <b-container>
      <b-row>   
        <b-col md="3"><Sidebar id="sidebar"/>
        </b-col>
        <b-col md="9"><router-view />test2</b-col>
      </b-row>
      <Footer id="home"></Footer>
    </b-container>




 
  </div>

</template>

<script>
  import Sidebar from './components/Sidebar'
  import Footer from './components/Footer'


  export default {
    components: {
      Sidebar,
      Footer


    }
  }
</script>

<style>
 
</style>