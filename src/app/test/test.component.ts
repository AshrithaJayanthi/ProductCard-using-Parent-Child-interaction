import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FakedataService } from '../fakedata.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit , OnDestroy {
  myPosts:Post[]=[];
  users;
  mySubscription:Subscription;
//inject fakedata service obj
  constructor(private fsObj:FakedataService ,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription=this.fsObj.getPosts().subscribe(
      // this.mySubscription=this.fsObj.getUsers().subscribe(
      postsData=>{this.myPosts=postsData},
      // userData=>{this.users=userData},
      err=>{
        console.log("err in getting posts data",err)
      }
    )
  }
  onSelectId(id){
this.router.navigateByUrl('test/'+id)
  }
ngOnDestroy(){
this.mySubscription.unsubscribe();
}
}
