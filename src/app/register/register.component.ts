import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit , OnDestroy{

  constructor() { 
    console.log("reg-cons")
  }

  ngOnInit(): void {
  }
ngOnDestroy(){
  console.log("login destroyed")
}
}
