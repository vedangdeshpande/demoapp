import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

const baseURL = "http://localhost:3000/users"

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<Users[]>{
    return this.http.get<Users[]>(baseURL)
  }

  getUser(id:any):Observable<Users>{
    return this.http.get(`${baseURL}/${id}`)
  }

  createUser(data:any):Observable<any>{
    console.log(data)
    return this.http.post(baseURL, data)
  }

  updateUser(id:any, data:any):Observable<any>{
    return this.http.put(`${baseURL}/${id}`, data)
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete(`${baseURL}/${id}`)
  }

  searchByName(username:string):Observable<Users[]>{
    console.log(`${baseURL}?username=${username}`)
    return this.http.get<Users[]>(`${baseURL}?username=${username}`)
  }

  // deleteAll():Observable<any>{
  //   return this.http.delete(baseURL)
  // }
}
