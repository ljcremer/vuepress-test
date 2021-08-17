import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Title 1",["/index.html","/README.md"]],
  ["v-7b74c6c7","/fremont/","Readme.md",["/fremont/index.html","/fremont/README.md"]],
  ["v-cd0bacaa","/shanghai/","Readme.md",["/shanghai/index.html","/shanghai/README.md"]],
  ["v-050a870e","/tesla/Page.html","Page test",["/tesla/Page","/tesla/Page.md"]],
  ["v-d5572b9e","/tesla/","Home",["/tesla/index.html","/tesla/README.md"]],
  ["v-55654724","/tesla/access.html","Access Request & Badging",["/tesla/access","/tesla/access.md"]],
  ["v-1ba589d5","/tesla/contacts.html","Contacts",["/tesla/contacts","/tesla/contacts.md"]],
  ["v-5e749ca9","/tesla/ecomply.html","eComply",["/tesla/ecomply","/tesla/ecomply.md"]],
  ["v-9ce46e5c","/tesla/parking.html","Parking Passes",["/tesla/parking","/tesla/parking.md"]],
  ["v-973a6b52","/tesla/procedure.html","Procedures",["/tesla/procedure","/tesla/procedure.md"]],
  ["v-6dcc081d","/tesla/questions.html","Questions",["/tesla/questions","/tesla/questions.md"]],
  ["v-10f649dc","/tesla/visitor.html","Visitor Procedure",["/tesla/visitor","/tesla/visitor.md"]],
  ["v-7d99e8d8","/tesla/Temp/testing-this.html","testing this",["/tesla/Temp/testing-this","/tesla/Temp/testing-this.md"]],
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
