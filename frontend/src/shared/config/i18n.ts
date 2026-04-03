import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// i18n.use(LanguageDetector).use(initReactI18next);

import en from "./locales/en.json";
import ua from "./locales/ua.json";

export const resources = {
  en: { translation: en },
  ua: { translation: ua },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ua"],
    interpolation: {
      escapeValue: false,
    },
    resources,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
