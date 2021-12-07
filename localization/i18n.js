import * as Localization from "expo-localization"; 
import I18n from "i18n-js";

import * as enL from "./translation/en.json";
import * as esL from "./translation/es.json"; 

I18n.translations = {
    en: enL, 
    es: esL,
};

I18n.locale = Localization.locale;
I18n.fallbacks = true; 

export default I18n; 
