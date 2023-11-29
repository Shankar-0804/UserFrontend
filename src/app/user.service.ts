import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //addUser(userData: any): Observable<any> {
    //return this.http.post<any>(`${this.apiUrl}`, userData);

    addUser(userData: any): Observable<any> {
      return this.http.post(this.apiUrl, userData);
  
}

}
