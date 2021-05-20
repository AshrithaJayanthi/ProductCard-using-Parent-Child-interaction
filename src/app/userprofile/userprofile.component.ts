import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  usersDetails;
  subscrip:Subscription
  constructor(private fsObj:FakedataService ,private router:Router) { }

  ngOnInit(): void {
    this.subscrip=this.fsObj.getUsersDet().subscribe(
      usersData=>{this.usersDetails=usersData},
      err=>{console.log(err)}
    )
  }
  onSelectId(idNum){
    this.router.navigateByUrl('userprofile/'+idNum)
  }
  ngOnDestroy(){
    this.subscrip.unsubscribe();
    }

}
