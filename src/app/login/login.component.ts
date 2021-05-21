import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onLogin(ref){
  let userLoginObj=ref.value

  //if username and pw are admin then nly go to admin
  if(userLoginObj.username!="admin" || userLoginObj.password!="admin")
  {
alert("invalid")
  }
  else{
this.router.navigateByUrl("/admin")
  }
}
}
