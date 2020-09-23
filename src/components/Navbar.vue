<template>
    <!-- <b-navbar id="navbar">
        <b-container>
            <b-row>

                <b-col md="2">
                    <b-button v-b-toggle.sidebar>
                        <b-icon icon="layout-sidebar" class="sm " />
                    </b-button>
                </b-col>
              
                <b-col md="8">
                    <b-input-group size="sm" class="container">
                        <b-input-group-prepend is-text>
                            <b-icon icon="search"></b-icon>
                        </b-input-group-prepend>
                        <b-form-input type="search"></b-form-input>
                    </b-input-group>
                </b-col>
                
                <b-col md="2" class="d-flex justify-content-end">
                    <b-nav-item-dropdown text="language" right>
                        <b-dropdown-item @click="switçchLang('en')" variant="info">ENG</b-dropdown-item>
                        <b-dropdown-item @click="switchLang('tw')" variant="info">TW</b-dropdown-item>
                        <b-dropdown-item @click="switchLang('cn')" variant="info">CN</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-col>
            </b-row>
        </b-container>
    </b-navbar>
-->
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand>Maths Formula for HKDSE</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <!-- <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit"><b-icon icon="search"></b-icon></b-button>
                    </b-nav-form>

                    <!-- <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    < b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown> -->
                    <b-nav-item-dropdown text="language" right>
                        <b-dropdown-item @click="switçchLang('en')" variant="info">ENG</b-dropdown-item>
                        <b-dropdown-item @click="switchLang('tw')" variant="info">TW</b-dropdown-item>
                        <b-dropdown-item @click="switchLang('cn')" variant="info">CN</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <!-- <b-nav-item-dropdown right> -->
                        <!-- Using 'button-content' slot -->
                        <!-- <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
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
    }
</style>