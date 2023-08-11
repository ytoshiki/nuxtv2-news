import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],

  buildModules: [
    "@nuxt/typescript-build",
    "nuxt-typed-vuex",
    "@nuxt/image",
    "@nuxtjs/vuetify",
  ],
  // /*
  //  ** Build configuration
  //  */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/typed-vuex/],
  },
  loading: {
    color: "blue",
    height: "5px",
  },
  publicRuntimeConfig: {
    NEWSDATA_API_KEY: process.env.NEWSDATA_API_KEY,
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  serverMiddleware: ["~/server"],
};

export default config;
