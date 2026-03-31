import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Company {

  private apiUrl = 'http://127.0.0.1:8000/company/list/';

  constructor(private http: HttpClient) {}

  // getCompanies(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  //   withCredentials: true
  // }

  getCompanies() {
  return this.http.get('http://127.0.0.1:8000/company/list/', {
    withCredentials: true   
  });
}
}
