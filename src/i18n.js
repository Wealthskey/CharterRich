import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "./assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    lng: "en",
    debug: false,
    ns: ["common", "home", "shop", "about"],

    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });
