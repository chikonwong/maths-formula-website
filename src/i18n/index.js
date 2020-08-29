import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import en from './lang/en'
import cn from './lang/zh-cn'
import tw from './lang/zh-tw'

const locale = localStorage.getItem('locale') || 'tw'

export default new VueI18n({
    locale,
    messages:{
        en,cn,tw
    }
})