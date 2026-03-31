import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule] ,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginData = {
    username: '',
    password: ''
  };


constructor(private authService: AuthService, private router: Router) {}

login() {
  this.authService.login(this.loginData).subscribe({
    next: (res: any) => {
      console.log('Login response:', res);
      console.log(res.has_sources);
      
      if (res.has_sources) {
        this.router.navigate(['/sources']);
      } else {
        this.router.navigate(['/add-source']);
      }
    }
  });
}
}
