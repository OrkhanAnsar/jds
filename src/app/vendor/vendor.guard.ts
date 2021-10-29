import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (await this.storageService.get('token')
      && await this.storageService.get('id')
      && (await this.storageService.get('userType') === 'vendor')) {
        return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
  
}
