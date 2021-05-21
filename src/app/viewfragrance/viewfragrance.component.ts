import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Fragrance } from '../models/addfragrance.model';

@Component({
  selector: 'app-viewfragrance',
  templateUrl: './viewfragrance.component.html',
  styleUrls: ['./viewfragrance.component.css']
})
export class ViewfragranceComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  fragrances:Fragrance[]=[];
  // fragrances:any;
  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.dsObj.getFragranceData().subscribe(
      res=>{this.fragrances=res},
      err=>{console.log(err)}
    )
  }
}
