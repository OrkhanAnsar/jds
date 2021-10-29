import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './user/user.guard';
import { VendorGuard } from './vendor/vendor.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [UserGuard]
  },
  {
    path: 'vendor',
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule),
    canActivate: [VendorGuard]
  },
  { path: '**', redirectTo: ''}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
