<template>
    <div id="app">
      <template>
  <div>
    <b-button v-b-toggle.sidebar-1>Menu</b-button>
    <b-sidebar id="sidebar-1" title="Meun" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
       
      </div>
    </b-sidebar>
  </div>
</template>
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