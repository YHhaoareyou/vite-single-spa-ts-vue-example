import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'
const path = require("path");
const { parsed } = require("dotenv").config({
  path: path.resolve(__dirname, "./src/.env"),
});

export default defineConfig(({ mode }) => {
  const publicAssetsBaseUrl =
    mode === "production"
      ? parsed.VITE_MF_VUE_PROD_DOMAIN + "/"
      : "http://localhost:3001/";

  return {
    root: "./src",
    base: publicAssetsBaseUrl,
    rollupOptions: {
      input: "vite-single-spa-vue.ts",
      format: "system",
      preserveEntrySignatures: true,
    },
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      cssCodeSplit: false,
      manifest: true,
      rollupOptions: {
        input: "./src/vite-single-spa-vue.ts",
        preserveEntrySignatures: true,
        output: {
          entryFileNames: "[name].js",
          assetFileNames: "assets/[name].[ext]",
        },
      },
    },
    resolve: {
      fullySpecified: false,
      modules: ["node_modules"],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    plugins: [
      vue({
        template: {
          transformAssetUrls: {
            base: '/src'
          }
        }
      }),
      dynamicImport(),
    ],
  };
});