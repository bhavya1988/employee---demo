import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../employee/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}
  onLogin() {
    this.userService.isLoggedIn = true;
    this.router.navigate(['employee']);
  }
}
