import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Title 1",["/index.html","/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html","Getting started",["/guide/getting-started","/guide/getting-started.md"]],
  ["v-fffb8e28","/guide/","Title 2",["/guide/index.html","/guide/README.md"]],
  ["v-50a567e2","/guide/Temp/testing-this.html","testing this",["/guide/Temp/testing-this","/guide/Temp/testing-this.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
