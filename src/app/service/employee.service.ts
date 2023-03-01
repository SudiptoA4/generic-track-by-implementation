import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeM } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {

  }
  getEmployees(records: number): Observable<EmployeeM[]> {
    return <Observable<EmployeeM[]>> this.http.get(`https://gorest.co.in/public/v2/users?page=1&per_page=${records}`);
  }
}
