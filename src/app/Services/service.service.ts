import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../globalParameters';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get("https://reqres.in/api/users?page=1");
  }
  getUser(id): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
  createtUser(body): Observable<any> {
    return this.http.post("https://reqres.in/api/users", body);
  }
  edittUser(id,body): Observable<any> {
    return this.http.put(`https://reqres.in/api/users/${id}`, body);
  }
}
