<template>
  <div class="sidebar">
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
      <b-form-input></b-form-input>
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
        :backdrop-variant="variant"
        backdrop
        shadow
      >
        <div class="px-3 py-2">
          <b-form-group label="Backdrop variant" label-for="backdrop-variant">
            <b-form-select
              id="backdrop-variant"
              v-model="variant"
              :options="variants"
            ></b-form-select>
          </b-form-group>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>
