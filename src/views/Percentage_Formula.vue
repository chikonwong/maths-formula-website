<template>
  <div>
    <textarea v-model= formula cols="30" rows="10"></textarea>
  <vue-mathjax :formula= formula></vue-mathjax>
  </div>
</template>
