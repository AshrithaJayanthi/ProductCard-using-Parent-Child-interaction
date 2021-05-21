import { Component, OnInit } from '@angular/core';
import { Fragrance } from '../models/fragrance.model';
import {DataService} from '../data.service';
@Component({
  selector: 'app-fragrance',
  templateUrl: './fragrance.component.html',
  styleUrls: ['./fragrance.component.css']
})
export class FragranceComponent implements OnInit {
//   fragrances:Fragrance[]=[];
// //inject data service object
//   constructor(private dsObj:DataService){

//   }
  
// //dsObj calls the method and return data of the method is stored in fragrances[]
//   ngOnInit(){
//     //obj initialization logic
//    //this.fragrances= this.dsObj.getFragranceData();
//    this.dsObj.getFragranceData().subscribe(
//      data=>{
//        this.fragrances=data
//      },
//     err=>{
//       console.log("err is",err)
//     }
//     )
//   }
ngOnInit(){

}  
  }


