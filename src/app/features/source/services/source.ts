import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  SourceResponse } from '../models/source.model';


@Injectable({
  providedIn: 'root',
})
export class SourceService {

 private apiUrl = 'http://127.0.0.1:8000/source/viewsets/';

  constructor(private http: HttpClient) {}

getSources(): Observable<SourceResponse> {
  return this.http.get<SourceResponse>(this.apiUrl);

  
}

// addSource(data: any) {
//   return this.http.post(this.apiUrl, data);
// }
  
// }

addSource(data: any) {
  return this.http.post(
    'http://127.0.0.1:8000/source/viewsets/',
    data,
    { withCredentials: true }   
  );
}
}
