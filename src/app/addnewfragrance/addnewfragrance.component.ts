import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Fragrance } from '../models/addfragrance.model';

@Component({
  selector: 'app-addnewfragrance',
  templateUrl: './addnewfragrance.component.html',
  styleUrls: ['./addnewfragrance.component.css']
})
export class AddnewfragranceComponent implements OnInit {

  constructor(private dsObj:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  fragranceModel=new Fragrance(" "," "," ")
  onSubmitNewFragrance(){
    //console.log(this.fragranceModel)
    this.dsObj.createNewFragrance(this.fragranceModel).subscribe(
      res=>{
        //navigate to viewmobiles component using routerservice
        this.router.navigateByUrl("products/fragrance")
      },
      err=>{
        console.log("err in creating new frag"+err)
      }
    )
  }

}
