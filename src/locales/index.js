import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { LOCAL_LANGUAGE, DEFAULT_LANG } from '@/kits/keys';

Vue.use(VueI18n)

const locales = {
  zh: require('./zh-cn.json'),
  en: require('./en-us.json')
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales,
})

export const setup = lang => {
  if (lang === undefined) {
    lang = window.localStorage.getItem(LOCAL_LANGUAGE)
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG
    }
  }
  window.localStorage.setItem(LOCAL_LANGUAGE, lang)

  Object.keys(locales).forEach(lang => {
    document.body.classList.remove(`lang-${lang}`)
  })
  document.body.classList.add(`lang-${lang}`)
  document.body.setAttribute('lang', lang)

  Vue.config.lang = lang
  i18n.locale = lang
}

setup()
export default i18n