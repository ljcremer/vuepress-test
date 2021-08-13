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
  "headers": [
    {
      "level": 2,
      "title": "Hello VuePress3",
      "slug": "hello-vuepress3",
      "children": [
        {
          "level": 3,
          "title": "Hello VuePress3",
          "slug": "hello-vuepress3-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Hello VuePress4",
          "slug": "hello-vuepress4",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "README.md",
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
