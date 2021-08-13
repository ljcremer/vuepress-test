export const data = {
  "key": "v-fb0f0066",
  "path": "/guide/getting-started.html",
  "title": "Getting started",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Getting started",
    "description": "Description 2"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/getting-started.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
