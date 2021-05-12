import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent  {
  jewels=[
    //declaring 6 new productDetails
    {
      
        productTitle:"extrait de camélia ring",
      description:"21250$",
        productImage:"https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/extrait-de-camelia-ring-pink-pink-gold-diamond-packshot-default-j11662-8825427525662.jpg"
        },
        {
        productTitle:"extrait de camélia transformable",
        description:"82000$",
        productImage:"https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/extrait-de-camelia-transformable-ring-pink-pink-gold-diamond-packshot-default-j11859-8823695114270.jpg"
        },
        
        {
        productTitle:"pétales de camélia ring",
        description:"82000$",
        productImage:"https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/petales-de-camelia-ring-yellow-yellow-gold-diamond-packshot-default-j11669-8826438090782.jpg"
        },
        
        {
        productTitle:"bouton de camélia necklace",
        description:"52000$",
        productImage:"https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/bouton-de-camelia-necklace-white-white-gold-diamond-packshot-default-j11177-8833024131102.jpg"
        },
        {
          productTitle:"coco crush necklace",
          description:"432500$",
          productImage:"https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/coco-crush-necklace-white-white-gold-diamond-packshot-default-j11357-8832989593630.jpg"
          },
          {
            productTitle:"comète chevron necklace",
            description:"23620$",
            productImage:"https://www.chanel.com/images//t_one///q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/comete-chevron-transformable-necklace-white-diamond-white-gold-packshot-default-j11934-8831192760350.jpg"
            },
    

  ];

}
