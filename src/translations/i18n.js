import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";
 
import { TRANSLATIONS_ES } from "./es";
import { TRANSLATIONS_EN } from "./en";
import { TRANSLATIONS_UA } from "./ua";
import { TRANSLATIONS_ARAB } from "./arab";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
        es: {
            translation: TRANSLATIONS_ES
        },
        uk: {
            translation: TRANSLATIONS_UA
        },
        en: {
            translation: TRANSLATIONS_EN
        },
        arab: {
            translation: TRANSLATIONS_ARAB
        }
   },
   interpolation: {
        format: function (value, format, lng) {
            if (value instanceof Date) return moment(value).format(format);
            if (typeof value === "number") return new Intl.NumberFormat().format(value);
            return value;
        }
    }
 });
 
// i18n.changeLanguage("en");

export { i18n };