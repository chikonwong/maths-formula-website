<template>
    <b-navbar id="navbar">
        <!-- toggle sidbar button -->
        <b-button v-b-toggle.sidebar><b-icon icon="layout-sidebar" class="sm "/></b-button>
        <!-- search -->
        <b-input-group size="sm" class="container">
            <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="search"></b-form-input>
        </b-input-group>
        <!-- language     -->
        <b-nav-item-dropdown text="language" right>
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
    #navbar {
        background-color: aquamarine;
        width: 100%;

        position: sticky;

    }
    

    
</style>