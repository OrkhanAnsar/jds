import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './user/user.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),

  // }
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [UserGuard]
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
