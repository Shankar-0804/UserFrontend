import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/api/users';

  constructor(private http : HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }


  saveUser(data : any) : Observable <any>{
    return this.http.post<any>(this.url, data);
  }
}
