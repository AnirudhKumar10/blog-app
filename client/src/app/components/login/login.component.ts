import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthService) {}
  usr = new User();

  forgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  submit() {
    this.auth.login(this.usr)
  }

}
