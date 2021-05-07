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

    {
    productTitle:"Serum Bundle",
  description:"56$",
    productImage:"https://cdn.shopify.com/s/files/1/0066/8719/5183/products/SERUM-BUNDLE-WS_900x.jpg?v=1600442327"
    },
    {
    productTitle:"Foaming facewash",
    description:"20$",
    productImage:"https://cdn.shopify.com/s/files/1/0066/8719/5183/products/FOAM-FACE-WASH-ECOMM-ON-PINK_900x.jpg?v=1599085287"
    },
    
    {
    productTitle:"Face Moisturizer",
    description:"26$",
    productImage:"https://cdn.shopify.com/s/files/1/0066/8719/5183/products/face-moisturizer_900x.jpg?v=1569447632"
    },
    
    {
    productTitle:"Technology-4",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://cdn.shopify.com/s/files/1/0066/8719/5183/products/eye-cream_900x.jpg?v=1569447632"
    },
    {
      productTitle:"Technology-5",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://cdn.shopify.com/s/files/1/0066/8719/5183/products/serum_900x.jpg?v=1569447632"
      },
      {
        productTitle:"Technology-6",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
        productImage:"https://cdn.shopify.com/s/files/1/0066/8719/5183/products/KS_Lip-Oil_Ecomm-Pink_Websized_01_c1ec492a-2914-4ff4-b78c-d8a22cea31c6_900x.jpg?v=1612905125"
        },

  ];
  productsSentByChild=[]
  productCount:number=0;
  getProductDetailsFromChild(productTitle)
  {
this.productsSentByChild.push(productTitle)
this.productCount++
  }

}
