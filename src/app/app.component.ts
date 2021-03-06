import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './shared/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private storageService: StorageService, private router: Router) { }

  async ngOnInit() {
    const auth = await this.storageService.get('auth');

    switch (auth?.userType) {
      case 'user':
        console.log('user');
        this.router.navigate(['user']);
        break;
      case 'vendor':
        console.log('vendor');
        this.router.navigate(['vendor']);
        break;
      default:
        console.log('auth');
        this.router.navigate(['auth']);
        break;
    }
  }
}
