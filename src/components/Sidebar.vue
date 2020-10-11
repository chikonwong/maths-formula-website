<template>
  <div class="col-3">
    <!-- this is full secreen version sidebar  -->
    <div class="d-none d-md-block d-lg-block d-xl-block col-12">
      <b-form-input class="mt-2" placeholder="Search"></b-form-input>
      <!-- <h2>This is Full Screen version sidebar</h2> -->
      <ul class="list-unstyled px-3">
        <li>col1</li>
        <li>col2</li>
        <li>col3</li>
      </ul>
    </div>
    <!-- this is mobile version sidebar  -->
    <div class="d-sm-block d-md-none">
      <b-sidebar
        id="sidebar-backdrop"
        title="Sidebar with backdrop"
        backdrop-variant="dark"
        backdrop
        shadow
      >
        <div class="px-3 py-2"></div>
      </b-sidebar>
    </div>
  </div>
</template>

