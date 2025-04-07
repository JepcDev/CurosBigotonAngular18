import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';  // URL de la API

  constructor(private http: HttpClient) { }

  // Método para obtener los usuarios desde la API
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // Hacemos una petición GET a la URL de la API
  }
}
