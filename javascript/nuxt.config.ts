// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { 
    // shim: false,
    // strict: true
  },
  // Server Side Rendering... mmmh...
  ssr: true
})
