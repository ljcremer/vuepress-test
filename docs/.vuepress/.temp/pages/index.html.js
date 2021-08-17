export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Title 1",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Title 1",
    "description": "Description 1"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
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
