import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}
  user = new User();
  password2;
  status;
  sumbit() {
    this.auth.register(this.user).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/auth/login'])
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
