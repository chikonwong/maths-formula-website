<template>
    <div class="header">
        <b-container>
            <b-row>
                <b-col md='9'></b-col>
                <b-col md='3'>

                    <b-button @click="switchLang('en')" variant="info">ENG</b-button>
                    <b-button @click="switchLang('tw')" variant="info">TW</b-button>
                    <b-button @click="switchLang('cn')" variant="info">CN</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>
<script>
    export default {
        methods:{
        switchLang(lang) {
            this.$i18n.locale = lang
            localStorage.setItem('locale', lang)
            console.log('clicked')
        },
}
    }
</script>
<style>
    .header {
        padding: 100px;

    }
</style>