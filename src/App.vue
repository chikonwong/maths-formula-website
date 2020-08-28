<template>
  <div>

    <b-container>
      <Header />
      <b-row>
        <b-col md="3">
          <Sidebar id="sidebar" />
        </b-col>
        <b-col md="9">
          <router-view /></b-col>
      </b-row>
      <Footer id="home"></Footer>
    </b-container>





  </div>

</template>

<script>
  import Sidebar from './components/Sidebar'
  import Footer from './components/Footer'
  import Header from './components/Header'

  export default {
    components: {
      Sidebar,
      Footer,
      Header


    }
  }
</script>

<style>

</style>