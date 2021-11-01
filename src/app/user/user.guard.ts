import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const auth = await this.storageService.get('auth');
    if (auth?.token
      && auth?.id
      && auth?.userType === 'user') {
        return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
