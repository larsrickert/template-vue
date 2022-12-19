import type { DateTimeFormats } from "@intlify/core-base";

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
} satisfies DateTimeFormats;

export default dateTimeFormats;
