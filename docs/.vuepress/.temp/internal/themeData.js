export const themeData = {
  "logo": "./images/tesla.svg",
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "Guide",
          "link": "/guide/"
        },
        {
          "text": "Reference",
          "children": [
            {
              "text": "VuePress",
              "children": [
                {
                  "text": "CLI",
                  "link": "/reference/cli.html"
                },
                "/reference/config.md",
                "/reference/frontmatter.md",
                "/reference/components.md",
                "/reference/plugin-api.md",
                "/reference/theme-api.md",
                "/reference/client-api.md",
                "/reference/node-api.md"
              ]
            },
            {
              "text": "Bundlers",
              "children": [
                "/reference/bundler/webpack.md",
                "/reference/bundler/vite.md"
              ]
            },
            {
              "text": "Default Theme",
              "children": [
                "/reference/default-theme/config.md",
                "/reference/default-theme/frontmatter.md",
                "/reference/default-theme/components.md",
                "/reference/default-theme/markdown.md",
                "/reference/default-theme/styles.md"
              ]
            },
            {
              "text": "Official Plugins",
              "link": "/reference/plugin/",
              "children": []
            }
          ]
        },
        {
          "text": "Learn More",
          "children": [
            {
              "text": "Advanced",
              "children": [
                "/advanced/architecture.md",
                "/advanced/plugin.md",
                "/advanced/theme.md",
                {
                  "text": "Cookbook",
                  "link": "/advanced/cookbook/"
                }
              ]
            },
            {
              "text": "Resources",
              "children": [
                "/contributing.md",
                {
                  "text": "Changelog",
                  "link": "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md"
                },
                {
                  "text": "Awesome VuePress",
                  "link": "https://github.com/vuepress/awesome-vuepress"
                }
              ]
            }
          ]
        },
        {
          "text": "v2.x",
          "children": [
            {
              "text": "v1.x",
              "link": "https://v1.vuepress.vuejs.org"
            },
            {
              "text": "v0.x",
              "link": "https://v0.vuepress.vuejs.org"
            }
          ]
        }
      ],
      "sidebar": {
        "/guide/": [
          {
            "isGroup": true,
            "text": "Guide",
            "children": [
              "/guide/README.md",
              "/guide/getting-started.md"
            ]
          }
        ]
      },
      "editLinkText": "Edit this page on GitHub",
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
