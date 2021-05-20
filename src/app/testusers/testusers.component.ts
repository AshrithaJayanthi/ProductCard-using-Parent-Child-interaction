import { Component, OnDestroy, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { Subscription } from 'rxjs';

import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-testusers',
  templateUrl: './testusers.component.html',
  styleUrls: ['./testusers.component.css']
})
export class TestusersComponent implements OnInit,OnDestroy {
//  usersData:Users[]=[]
usersData;
subObj:Subscription
//injecting service into constructor
  constructor(private usObj:FakedataService) { }

  ngOnInit(): void {
    this.subObj=this.usObj.getUsersData().subscribe(
      user=>{this.usersData=user
      },
    
      err=>{
        console.log("err in getting users data",err)
      }
    )
  }
  ngOnDestroy(){
    this.subObj.unsubscribe();
    }
}
