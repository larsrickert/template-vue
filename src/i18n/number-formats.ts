import type { IntlNumberFormats } from "vue-i18n";

const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "USD",
    },
  },
} satisfies IntlNumberFormats;

export default numberFormats;
