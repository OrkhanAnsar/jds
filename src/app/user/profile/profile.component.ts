import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  userInfo: UserInfo;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser()
      .then(user => console.log(this.userInfo = user))
      .catch(err => console.log(err));
  }

  async signOut() {
    await this.userService.signOut();
    this.router.navigate(['auth']);
  }
}
