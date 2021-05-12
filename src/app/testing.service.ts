import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  data:any;
  //to send data to other
  getData(){
    return this.data
  }
  //to recieve data from other
  setData(value){
    this.data=value
  }
}
