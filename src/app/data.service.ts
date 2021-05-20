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

  


 

}
