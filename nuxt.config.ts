// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      ENVIRONMENT: process.env.ENVIRONMENT ?? "local",
      // apiKey: "",
      // apiUrl: "",
      // apiKey: process.env.NUXT_API_KEY,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },

  app: {
    head: {
      title: "VideoApp",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["@/assets/css/reset.css", "bootstrap/dist/css/bootstrap.min.css"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/foundation/_base.scss";',
        },
      },
    },
  },
})
