import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Fragrance } from 'src/app/models/addfragrance.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
// fragrances:Fragrance[]=[];

fragrances:Fragrance[]=[];
//to hold the index
editFragranceIndex;
//hold the new Frag
editFragranceObj=new Fragrance('','','')
editFragranceStatus:boolean=false;


  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.dsObj.getFragranceData().subscribe(
      res=>{this.fragrances=res},
      err=>{console.log(err)}
    )
  }
//to editfragrance
editFragrance(frag,ind){
this.editFragranceObj=frag
this.editFragranceIndex=ind
this.editFragranceStatus=true
console.log("should be modfied:",this.editFragranceObj)
}
saveFragrance(modfiedFragObj)
{
  this.editFragranceStatus=false;
  modfiedFragObj.id=this.editFragranceObj["id"]
  modfiedFragObj.productImage=this.editFragranceObj["productImage"]
  console.log("modified obj is:",modfiedFragObj.ind)
  this.dsObj.updateFragrance(modfiedFragObj).subscribe(
   res=>{console.log(res)},
   err=>{console.log("error is: ",err)} 
  )
}
deleteFragrance(frag)
{
  this.dsObj.deleteFragrance(frag.id).subscribe(
    res=>{console.log(res)
    alert("frag deleted")
  },
  err=>{console.log(err)}
  )
}
}
