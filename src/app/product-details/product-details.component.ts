import { Component, Input , EventEmitter, Output } from '@angular/core';
import { Fragrance } from '../models/fragrance.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
  //to recieve data from parent as input
 @Input() productObj:Fragrance
 //creating a custom event
 @Output() myEvent=new EventEmitter()
 sendProductDetailsToParent(productTitle)
 {
//emit data to parent
this.myEvent.emit(productTitle)
 }
  }


