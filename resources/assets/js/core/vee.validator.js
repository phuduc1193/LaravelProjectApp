import Vue from 'vue'
import VeeValidate from 'vee-validate'
import en from 'vee-validate/dist/locale/en';
import fr from 'vee-validate/dist/locale/fr';
import i18n from './language'

Vue.use(VeeValidate, {
    i18n,
    dictionary: {
        en,
        fr
    }
})
