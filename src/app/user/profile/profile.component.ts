import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { UserInfo } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  userInfo: UserInfo;

  constructor(private userService: UserService, private overlayService: OverlayService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(() => this.init());
  }

  init(): Promise<void | UserInfo> {
    this.overlayService.loading();
    return this.userService.getUser()
      .then(user => this.userInfo = user)
      .catch(err => this.overlayService.error(err))
      .finally(() => this.overlayService.stopLoading());
  }

  async signOut() {
    await this.userService.signOut();
    this.router.navigate(['auth']);
  }

  refresh(event) {
    this.init().finally(() => event.target.complete());
  }
}
