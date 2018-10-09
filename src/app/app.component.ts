import { Component, OnInit } from '@angular/core';
import { GitService } from './service/gitservice.service';

import { HttpErrorResponse } from '@angular/common/http';
import { repos } from './model/repos.model';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent{
  username:String;
  user:User;
  repos:repos[];

  constructor(private ser:GitService) {
    
    

  
}

getInfo(username){
  this.ser.getUsers(username).subscribe((user)=>{
    this.user=user;

},
(error:HttpErrorResponse)=>{
  console.log(error);
  
  
  
}),


this.ser.getRepos(username).subscribe((repos)=>
{
  
  this.repos=repos;
  
},
(error:HttpErrorResponse)=>{
  console.log(error);
  
});
}
}

