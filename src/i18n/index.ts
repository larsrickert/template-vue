import messages from "@intlify/unplugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";
import type dateTimeFormats from "./datetime-formats";
import datetimeFormats from "./datetime-formats";
import type en from "./locales/en.json";
import numberFormats from "./number-formats";

// add type inference/autocompletion for translation keys
declare module "vue-i18n" {
  type MessageSchema = typeof en;
  export interface DefineLocaleMessage extends MessageSchema {
    [key: string]: unknown;
  }

  type DatetimeSchema = typeof dateTimeFormats["en"];
  export interface DefineDateTimeFormat extends DatetimeSchema {
    [key: string]: unknown;
  }

  type NumberSchema = typeof numberFormats["en"];
  export interface DefineNumberFormat extends NumberSchema {
    [key: string]: unknown;
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
