import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/tesla/": [
    {
      isGroup: true,
      text: "Texas",
      children: [
        "/tesla/procedure.md",
         "/tesla/access.md", 
         "/tesla/parking.md", 
         "/tesla/visitor.md", 
         "/tesla/contacts.md", 
         "/tesla/ecomply.md", 
         "/tesla/questions.md"]
    },
  ],
};
