import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import {User} from '../model/user.model';
import { repos} from '../model/repos.model';
import { Observable } from 'rxjs';
@Injectable()
export class GitService {
  baseURL:string="https://api.github.com/users/";

  constructor(private http:HttpClient) { 
    
  }
  getUsers(uname:String):Observable<User>{
   
    return this.http.get<User>(this.baseURL+uname);
    
  }
  getRepos(uname:string):Observable<repos[]> {
    const url=this.baseURL+uname+'/repos';
    return this.http.get<repos[]>(url);
  }
}
