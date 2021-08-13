export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Title 2",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Title 2",
    "description": "Description 2"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Heading 2",
      "slug": "heading-2",
      "children": [
        {
          "level": 3,
          "title": "Heading 3",
          "slug": "heading-3",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/README.md",
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
