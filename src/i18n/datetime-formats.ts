import type { IntlDateTimeFormats } from "vue-i18n";

const dateTimeFormats = {
  en: {
    date: {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
    dateTime: {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    },
  },
} satisfies IntlDateTimeFormats;

export default dateTimeFormats;
