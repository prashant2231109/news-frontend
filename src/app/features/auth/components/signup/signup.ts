// import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth-service';
// import { FormsModule } from '@angular/forms';
// import { Company } from '../../services/company';

// @Component({
//   selector: 'app-signup',
//   imports: [FormsModule],
//   templateUrl: './signup.html',
//   styleUrl: './signup.css',
// })
// export class Signup {

//   signupData = {
//     username: '',
//     password: '',
//     confirm_password: '',
//     first_name: '',
//     last_name: '',
//     email: '',
//     company: null
//   };

//   companies: any[] = [];


//   // companies = [
//   //   { id: 1, name: 'Amazon' },
//   //   { id: 2, name: 'Google' }
//   // ];
// onstructor(private authService: AuthService , private companyService: Service) {}

//   ngOnInit(): void {
//     this.loadCompanies();
//   }

//   loadCompanies() {
//     this.companyService.getCompanies().subscribe({
//       next: (res) => {
//         console.log('Companies API:', res);
//         this.companies = res; // adjust if response has "data"
//       },
//       error: (err) => {
//         console.error(err);
//       }
//     });
//   }

//   c

//   signup() {
//     this.authService.signup(this.signupData).subscribe({
//       next: (res) => {
//         console.log('Signup success', res);
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Company } from '../../../services/company'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {

  signupData = {
    username: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
    email: '',
    company: null
  };

  companies: any[] = [];

  constructor(
    private authService: AuthService,
    private companyService: Company,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe({
      next: (res: any) => {
        console.log('Companies API:', res);

        // adjust depending on API response
        this.companies = res.data ? res.data : res;
        console.log('Loaded companies:', this.companies);
      },
      error: (err :any) => {
        console.error(err);
      }
    });
  }

  signup() {
    this.authService.signup(this.signupData).subscribe({
      next: (res) => {
        console.log('Signup success', res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
