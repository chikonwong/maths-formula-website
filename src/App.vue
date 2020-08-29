<template>
  <div>

    <b-container>
      <Header></Header>
      <b-row>
        <b-col md="3">
          <Sidebar id="sidebar" />
        </b-col>
        <b-col md="9">
          <router-view></router-view>
        </b-col>
      </b-row>
      <Footer></Footer>
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
