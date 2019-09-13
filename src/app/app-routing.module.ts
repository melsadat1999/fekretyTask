import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  { path: '', redirectTo:'./pages/signup/signup', pathMatch: 'full'},
  { path: 'tabs',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: '', loadChildren: ()=> import('./pages/signup/signup.module').then(m=>m.SignupPageModule) },
  { path: 'add-item', loadChildren: './pages/add-item/add-item.module#AddItemPageModule' },
  { path: 'list-items', loadChildren: './pages/list-items/list-items.module#ListItemsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
