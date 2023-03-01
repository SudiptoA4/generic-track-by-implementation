import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DBModel } from '../model/all.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {

  }
  getData(records: number): Observable<DBModel[]> {
    return <Observable<DBModel[]>> this.http.get(`https://gorest.co.in/public/v2/users?page=1&per_page=${records}`);
  }
}
