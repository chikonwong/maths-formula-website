<template>
  <div class="formula">

    <vue-mathjax :formula="formula1"></vue-mathjax>
    <vue-mathjax :formula="formula2"></vue-mathjax>
    <vue-mathjax :formula="formula3"></vue-mathjax>
    <vue-mathjax :formula="formula4"></vue-mathjax>
    <vue-mathjax :formula="formula5"></vue-mathjax>
    <vue-mathjax :formula="formula6"></vue-mathjax>


  </div>
</template>

<script>

 export default {
  data () {
    return {
      formula1: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',

    }
  }
}
</script>



<style>
  .formula {
    padding: 14px;
  }
</style>