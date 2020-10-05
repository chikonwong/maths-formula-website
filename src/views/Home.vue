<template>
    <div class="col-8">
       <div v-for="item in info" :key="item.sub_topic">
      {{ item.sub_topic }}this is from samsung tab s6
      {{ item.formula }}
    </div>
    </div>
    
   
</template>

<script>
const axios = require('axios');

 export default {
  data() {
    return {
      info: [{
        sub_topic: "",
        formula: ""
      }
        
      ]
    };
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/api/formula/')
      .then(response => (this.info = response.data))
  }
 }
</script>

<style>

</style>