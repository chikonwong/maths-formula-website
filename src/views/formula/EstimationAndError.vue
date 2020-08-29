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
   
    computed: {
      formula1() {
        return this.$t('EstimationAndError.formula1');
      },
      formula2() {
        return this.$t('EstimationAndError.formula2');
      },
      formula3() {
        return this.$t('EstimationAndError.formula3');
      },
      formula4() {
        return this.$t('EstimationAndError.formula4');
      },
      formula5() {
        return this.$t('EstimationAndError.formula5');
      },
      formula6() {
        return this.$t('EstimationAndError.formula6');
      },
    }
  }
</script>



<style>
  .formula {
    padding: 14px;
  }
</style>