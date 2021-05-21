import { Injectable } from '@angular/core';
import { Fragrance } from './models/fragrance.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  

  //to access pvt data
  getFragranceData():Observable<Fragrance[]>{
   
    //http get
    //returns product array
    return this.hc.get<Fragrance[]>("http://localhost:3000/fragrances")

   
  }
  createNewFragrance(fragranceObj):Observable<any>
  {
return this.hc.post("http://localhost:3000/fragrances",fragranceObj)
  }
  
//to update frag
updateFragrance(modfiedFragObj):Observable<any>
{
  return this.hc.put("http://localhost:3000/fragrances/"+modfiedFragObj.id,modfiedFragObj)
}
//delete frag
deleteFragrance(id):Observable<any>
{
return this.hc.delete("http://localhost:3000/fragrances/"+id)
}
 

}
