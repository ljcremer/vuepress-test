export const themeData = {
  "logo": "./images/tesla.svg",
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "Texas",
          "link": "/tesla/"
        },
        {
          "text": "Fremont",
          "link": "/fremont/"
        },
        {
          "text": "Shanghai",
          "link": "/shanghai/"
        }
      ],
      "sidebar": {
        "/tesla/": [
          {
            "isGroup": true,
            "text": "Texas",
            "children": [
              "/tesla/procedure.md",
              "/tesla/access.md",
              "/tesla/parking.md",
              "/tesla/visitor.md",
              "/tesla/contacts.md",
              "/tesla/ecomply.md",
              "/tesla/questions.md"
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
