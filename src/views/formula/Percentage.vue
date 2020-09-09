<template>
  <div class="formula">

    <vue-mathjax :formula="formula1"></vue-mathjax>
    <vue-mathjax :formula="formula2"></vue-mathjax>
    <vue-mathjax :formula="formula3"></vue-mathjax>
    <vue-mathjax :formula="formula4"></vue-mathjax>
    <vue-mathjax :formula="formula5"></vue-mathjax>
    <vue-mathjax :formula="formula6"></vue-mathjax>
    <button>{{ $t('about-screen.title') }}</button>


  </div>
</template>

<script>

 export default {
  data () {
    return {
    formula1: '$$Maximun Absolute Error = {Smallest unit measured \\over 2}$$',
    formula2: '$$Absolute Error = True Balue - Measured Value$$',
    formula3: '$$Relative Error = {Maximum Absolute Error \\over Measured Value}={Absolute Error\\over True Value}$$',
    formula4: '$$Percentage Error = Relative Error \\times 100% $$',
    formula5: '$$Maximum Value = Measured Value +  Maximum Absolute Error$$',
    formula6: '$$Minimum Value = Measured Value  – Maximum Absolute Error$$'
    }
  }
}
</script>



<style>
  .formula {
    padding: 14px;
  }
</style>