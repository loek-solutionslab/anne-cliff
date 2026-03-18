import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, 'pages/product.html'),
        about: resolve(__dirname, 'pages/about.html'),
        faq: resolve(__dirname, 'pages/faq.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        solutionslab: resolve(__dirname, 'pages/solutionslab.html'),
      },
    },
  },
})
