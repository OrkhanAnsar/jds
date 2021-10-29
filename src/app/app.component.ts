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
    const userType = await this.storageService.get('userType');

    switch (userType) {
      case 'user':
        this.router.navigate(['user']);
        break;
      case 'vendor':
        this.router.navigate(['vendor']);
        break;
      default:
        this.router.navigate(['auth']);
        break;
    }
  }
}
