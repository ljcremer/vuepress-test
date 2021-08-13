export const data = {
  "key": "v-50a567e2",
  "path": "/guide/Temp/testing-this.html",
  "title": "testing this",
  "lang": "en",
  "frontmatter": {
    "lang": "en",
    "title": "testing this",
    "description": ""
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/Temp/testing-this.md",
  "git": {
    "updatedTime": 1628873717000,
    "contributors": [
      {
        "name": "Leonard Cremer",
        "email": "leonard@trooptravel.com",
        "commits": 1
      }
    ]
  }
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
