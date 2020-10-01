<template>
  <div class="sidebar col-2">
    <!-- this is web version sidebar-->
    <!-- <div class="d-md-none d-lg-block">
      <h2>This is web version sidebar</h2>
      <ul>
        <li>col1</li>
        <li>col2</li>
        <li>col3</li>
      </ul>
    </div> -->
    <!-- this is full secreen version sidebar  -->
    <div class="d-none d-md-block d-lg-block d-xl-block">
      <b-form-input class="mt-2"></b-form-input>
      <h2>This is Full Screen version sidebar</h2>
      <ul>
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
        <div class="px-3 py-2">
         
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

