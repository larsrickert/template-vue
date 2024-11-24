/// <reference types="vitest" />

import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { URL, fileURLToPath } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      compositionOnly: true,
      include: resolve(dirname(fileURLToPath(import.meta.url)), "./src/i18n/locales/**"),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // opt-in to new sass modern compiler which will also become the default in Vite 6
  // to prevent deprecation warnings
  // see: https://vite.dev/config/shared-options.html#css-preprocessoroptions
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  test: {
    environment: "jsdom",
    passWithNoTests: true,
    root: fileURLToPath(new URL("./", import.meta.url)),
  },
});
