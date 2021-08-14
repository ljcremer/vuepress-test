import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { navbar, sidebar } from "./configs";
const { path } = require("@vuepress/utils");

export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "",
  description: "Troop documentation",

  themeConfig: {
    logo: "./images/tesla.svg",

    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: "Edit this page on GitHub",
      },
    },
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        components: {
          TroopAlgolia: path.resolve(
            __dirname,
            "./components/TroopAlgolia.vue"
          ),
        },
      },
    ],
  ],
  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
            plugins: [
              require('tailwindcss'),
              require('autoprefixer')
            ]
        }
      },
    }

  },
  
});




