import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJSON from "./translation/en.json";
import ptBRJSON from "./translation/ptBR.json";
import esJSON from "./translation/es.json";

i18n.use(initReactI18next).init({
  lng: "ptBR",
  fallbackLng: "ptBR",
  interpolation:{
      escapeValue: false,
  },
  resources:{
      en: enJSON,
      ptBR: ptBRJSON,
      es: esJSON,
  }
});

export default i18n;