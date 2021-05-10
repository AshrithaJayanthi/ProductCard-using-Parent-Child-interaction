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
    productTitle:"Square Sunglasses",
    description:"385$",
    productImage:"https://www.chanel.com/images//t_one/t_fashion//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/square-sunglasses-white-acetate-acetate-packshot-default-a71414x08101s1692-8837625577502.jpg"
    },
    
    {
    productTitle:"Round Sunglasses",
    description:"360$",
    productImage:"https://www.chanel.com/images//t_one/t_fashion//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/round-sunglasses-black-acetate-metal-acetate-metal-packshot-default-a71397x06081s8816-8837386731550.jpg"
    },
    {
      productTitle:"j12 diamond bezel watch",
      description:"12,000$",
      productImage:"https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_1240/j12-diamond-bezel-watch-caliber-12-1-38-mm-black-black-ceramic-steel-diamond-packshot-default-h6526-8839831584798.jpg"
      },
      {
        productTitle:"mademoiselle privé",
        description:"141,000$",
        productImage:"https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/mademoiselle-prive-watch-black-silver-satin-diamond-white-gold-packshot-default-h5428-8828208545822.jpg"
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
