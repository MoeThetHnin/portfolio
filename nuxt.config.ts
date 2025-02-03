// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app:{
    baseURL: "portfolio"
  },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    },
  },
  vite: {
    plugins: [tailwindcss(),],
  },
})
