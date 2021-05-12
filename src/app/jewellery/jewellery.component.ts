import { Component, OnInit } from '@angular/core';
import { Jewel } from '../models/jewel.model';
import {DataThreeService} from '../data-three.service'
@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent implements OnInit  {
//to store the return data
jewels:Jewel[]=[];
//injecting object of service into constructor
constructor(private dsObj:DataThreeService)
{}
//dsObj calls the method and return data of the method is stored in jewels[]
ngOnInit(){
this.jewels=this.dsObj.getJewelData();
 }
}
