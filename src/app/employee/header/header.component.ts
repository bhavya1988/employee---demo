import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private location: Location,
    private userService: UserService
  ) {}
  @Input()
  headerText: string = '';

  @Input()
  back: boolean = false;

  onLogout() {
    this.userService.isLoggedIn = false;
    this.router.navigate(['login']);
  }
  onBack() {
    this.location.back();
  }
}
