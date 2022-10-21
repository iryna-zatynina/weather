import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationEN from './Locals/en/translation.json'
import translationUA from './Locals/ua/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    ua: {
        translation: translationUA
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "ua",
        interpolation: {
            escapeValue: false
        }
    })