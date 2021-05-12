import { Component, OnInit } from '@angular/core';
import { Glasses } from '../models/glasses.model';
import {TestingService} from '../testing.service'
import {DataTwoService} from '../data-two.service'
@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.css']
})
export class GlassesComponent implements OnInit  {
//   num:any;
// constructor(private testObj:TestingService){

// }
// ngOnInit():void{
//   this.num=this.testObj.getData();
// }
//to store return data type
glasses:Glasses[]=[];

//injecting object of service into constructor
constructor(private dsObj:DataTwoService){

}

//dsObj calls the method and return data of the method is stored in glasses[]
ngOnInit(){
this.glasses=this.dsObj.getGlassesData();
   }

}
