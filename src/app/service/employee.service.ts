import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  create(data): Observable<any> {
    return this.http.post(BaseUrl.API_URL + 'emp/create', data).pipe((res) => res);
  }

  getAll(): Observable<any> {
    return this.http.get(BaseUrl.API_URL + 'emp/all').pipe((res) => res);
  }

}
