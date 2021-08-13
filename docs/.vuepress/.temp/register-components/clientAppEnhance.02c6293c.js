import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("TroopAlgolia", defineAsyncComponent(() => import("C:/Trooptravel/Development/vuepress-test/docs/.vuepress/components/TroopAlgolia.vue")))
}
