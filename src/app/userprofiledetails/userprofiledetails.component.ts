import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-userprofiledetails',
  templateUrl: './userprofiledetails.component.html',
  styleUrls: ['./userprofiledetails.component.css']
})
export class UserprofiledetailsComponent implements OnInit {
userObj:any;
  constructor(private ar:ActivatedRoute,private fs:FakedataService) { }

  ngOnInit(): void {
    //get id from url
    let idNum=this.ar.snapshot.params.id
    //get data from method
    this.fs.getUserProfile(idNum).subscribe(
      obj=>{this.userObj=obj},
      err=>{
        console.log(err)
      }
    )
  }

}
