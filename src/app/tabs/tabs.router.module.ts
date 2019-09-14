import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "add-item",
        children: [
          {path: "", loadChildren: () => import("../pages/add-item/add-item.module").then( m => m.AddItemPageModule)}
        ]
      },
      {
        path: "list-items",
        children: [
          { path: "",loadChildren: () =>  import("../pages/list-items/list-items.module").then(m => m.ListItemsPageModule)}
        ]
      },
      { path: "", redirectTo: "/tabs/add-item", pathMatch: "full"}
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/add-item",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
