import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  //when data is not dynamic and same data is there everywhere
  // products=[1,2,3,4]
  products:Product[]=[
    //declaring 6 new productDetails
    {
    productTitle:"Coco Mademoiselle Parfum Spray",
  description:"84$",
    productImage:"https://www.chanel.com/images/w_0.51,h_0.51,c_crop/f_auto,w_512,h_512/coco-mademoiselle-eau-de-parfum-spray-1-2fl-oz--packshot-default-116390-8824196956190.jpg"
    },
    {
    productTitle:"N°5 Eau de Parfum Spray",
    description:"83$",
    productImage:"https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-spray-1-2fl-oz--packshot-default-125230-8833876000798.jpg"
    },
    
    {
    productTitle:"Coco Mademoiselle Intense Spray",
    description:"85$",
    productImage:"https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/coco-mademoiselle-eau-de-parfum-intense-spray-1-2fl-oz--packshot-default-116630-8817976377374.jpg"
    },
    
    {
    productTitle:"Chance Parfum Spray",
    description:"85$",
    productImage:"https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/chance-eau-tendre-eau-de-parfum-spray-1-2fl-oz--packshot-default-126240-8820439121950.jpg"
    },
    {
      productTitle:"Chance Toilette Spray",
      description:"82$",
      productImage:"https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/chance-eau-fraiche-eau-de-toilette-spray-1-7fl-oz--packshot-default-136410-8833882095646.jpg"
      },
      {
        productTitle:"Chance Eau de Parfum Spray",
        description:"108$",
        productImage:"https://www.chanel.com/images//t_one//w_0.55,h_0.55,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/chance-eau-de-toilette-spray-3-4fl-oz--packshot-default-126460-8833883176990.jpg"
        },

  ];
  productsSentByChild=[]
  //initialising count to 0
  productCount:number=0;
  //to push items into the cart array
  getProductDetailsFromChild(productTitle)
  {
this.productsSentByChild.push(productTitle)
this.productCount++
  }

}
