<template>
  <div id="app">
    <b-button v-b-toggle.sidebar-1>Menu</b-button>
    <b-sidebar id="sidebar-1" title="Meun" shadow>
      <div class="px-3 py-2">
                <ul class="list-unstyled components">
                  <li><router-link to="/Home">Home</router-link>
                  </li>
        <li>
          <a
              href="#Estimation-and-Error-Formula"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              >Estimation and Error Formula</a
            >
            <ul
              class="collapse list-unstyled"
              id="Estimation-and-Error-Formula"
            ></ul>
          </li>
          <li>
            <a
              href="#Percentage-Formula"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              >Percentage Formula</a
            >
            <ul class="collapse list-unstyled" id="Percentage-Formula"></ul>
          </li>
          <li>
            <a
              href="#Rate-and-Ratio-Formula"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              >Rate and Ratio Formula</a
            >
            <ul class="collapse list-unstyled" id="Rate-and-Ratio-Formula"></ul>
          </li>
          <li>
            <a
              href="#Rate-and-Ratio-Formula"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              >Rate and Ratio Formula</a
            >
            <ul class="collapse list-unstyled" id="Rate-and-Ratio-Formula"></ul>
          </li>
          <li>
            <a
              href="#Identities-Formula"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              >Identities Formula</a
            >
            <ul class="collapse list-unstyled" id="Identities-Formula"></ul>
          </li>
          <!-- Identities Formula
                   Law of Indices Formula
                   Mensuration Formula
                   Reflection and Rotation Formula
                   N-sides Polygon Formula
                   Statistics Formula
                   Trigonometry Identities Formula
                   Coordinate Geometry Formula
                   Geometry Reasons Formula
                   Quadratic Equation Formula
                   Complex Number Formula
                   Logarithmic Function Formula
                   Arithmetic Sequences Formula
                   Geometry Sequences Formula
                   Senior Trigonometry Formula
                   Probability Formula
                   Equation of Circle Formula
                
                 -->
        </ul>
      </div>
    </b-sidebar>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      message: 'this is a message'
    }
  }
}
</script>
<style>
  b-button{
    align-content: center;
  }
</style>