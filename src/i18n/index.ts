import messages from "@intlify/unplugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";
import datetimeFormats from "./datetime-formats";
import type en from "./locales/en.json";
import numberFormats from "./number-formats";

// add type inference/autocompletion for translation keys
declare module "vue-i18n" {
  type Message = typeof en;
  export interface DefineLocaleMessage extends Message {
    [key: string]: string;
  }
}

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
  numberFormats,
  datetimeFormats,
});

export default i18n;
