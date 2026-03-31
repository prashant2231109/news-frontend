import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://127.0.0.1:8000/subscriber/login/';
  private signupUrl = 'http://127.0.0.1:8000/subscriber/signup/'; // 👈 check your URL

  constructor(private http: HttpClient) {}

 
  // login(data: any) {
  //   return this.http.post(this.loginUrl, data);
  // }

  login(data: any) {
  return this.http.post(this.loginUrl, data, {
    
    withCredentials: true   
  });
}

   
  signup(data: any) {
    return this.http.post(this.signupUrl, data);
  }
}
