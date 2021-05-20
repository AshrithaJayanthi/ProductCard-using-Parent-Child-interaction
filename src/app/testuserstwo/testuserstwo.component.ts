import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
@Component({
  selector: 'app-testuserstwo',
  templateUrl: './testuserstwo.component.html',
  styleUrls: ['./testuserstwo.component.css']
})
export class TestuserstwoComponent implements OnInit,OnDestroy {
unsubObj:Subscription
empData;
//inject fakedata service object
  constructor(private empObj:FakedataService) { }

  ngOnInit(): void {
    this.unsubObj=this.empObj.getEmployeeData().subscribe(
      emp=>{this.empData=emp},
      err=>{console.log(err)}
    )
    
  }
  //to unsubscribe
  ngOnDestroy(){
    this.unsubObj.unsubscribe();
    }
}
