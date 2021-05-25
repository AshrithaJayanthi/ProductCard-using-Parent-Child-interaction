import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  // // }
  fragrances:Fragrance[]=[];
  searchTerm:string

  // fragrances=new Observable<Fragrance[]>()
  // fragrances:any;
  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    // this.fragrances=
    this.dsObj.getFragranceData()
    .subscribe(
      res=>{this.fragrances=res},
      err=>{console.log(err)}
    )
  }
}
