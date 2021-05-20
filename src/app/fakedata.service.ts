import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Post} from '../app/models/post.model'
import { Users } from './models/users.model';
@Injectable({
  providedIn: 'root'
})
export class FakedataService {
//inject
  constructor(private hc:HttpClient) { }
  getPosts():Observable<Post[]>
  {
    return this.hc.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  getUsers():Observable<any>
  {
   return this.hc.get<any>("https://reqres.in/api/users?page=2")
  }
  getUsersData():Observable<Users[]>
{
return this.hc.get<Users[]>("https://reqres.in/api/unknown")
}
getEmployeeData():Observable<any>
{
return this.hc.get<any>("https://jsonplaceholder.typicode.com/users")
}
getPostById(id):Observable<Post[]>
{
  return this.hc.get<Post[]>('https://jsonplaceholder.typicode.com/posts/'+id)
}
getUsersDet():Observable<any>
{
return this.hc.get<any>('http://localhost:3000/users')
}
getUserProfile(idNum):Observable<any>
{
return this.hc.get<any>('http://localhost:3000/users/'+idNum)
}
}
