<template>
   <b-navbar id="navbar">
       <b-button v-b-toggle.sidebar></b-button>
       <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item @click="switchLang('en')" variant="info">ENG</b-dropdown-item>
        <b-dropdown-item @click="switchLang('tw')" variant="info">TW</b-dropdown-item>
        <b-dropdown-item @click="switchLang('cn')" variant="info">CN</b-dropdown-item>
        </b-nav-item-dropdown>
   </b-navbar>
   
</template>
<script>
    export default {
        methods: {
            switchLang(lang) {
                this.$i18n.locale = lang
                localStorage.setItem('locale', lang)
                console.log('clicked')
            },
        }
    }
</script>
<style>
    #navbar{
        background-color: aquamarine;
        width: 100%;
          
        position: sticky;
      
    }
    
</style>