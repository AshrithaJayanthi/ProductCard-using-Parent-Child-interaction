import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.css']
})
export class GlassesComponent  {

  glasses=[
    //declaring 6 new productDetails
    {
      
        productTitle:"Square sunglasses",
      description:"384$",
        productImage:"https://www.chanel.com/images//t_one/t_fashion//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/square-sunglasses-white-acetate-acetate-packshot-default-a71414x08101s1692-8837625577502.jpg"
        },
        {
        productTitle:"Butterfly sunglasses",
        description:"520$",
        productImage:"https://www.chanel.com/images//t_one/t_fashion//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/butterfly-sunglasses-black-acetate-sequins-acetate-sequins-packshot-default-a71408x08203s0116-8837627150366.jpg"
        },
        
        {
        productTitle:"visor sunglasses",
        description:"500$",
        productImage:"https://www.chanel.com/images//t_one/t_fashion//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/visor-sunglasses-white-nylon-nylon-packshot-default-a71046x02081s0371-8834207514654.jpg"
        },
        
        {
        productTitle:"rectangle sunglasses",
        description:"385$",
        productImage:"https://www.chanel.com/images//t_one/t_fashion//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/rectangle-sunglasses-transparent-brown-acetate-metal-acetate-metal-packshot-default-a71398x06081s1365-8837415469086.jpg"
        },
        {
          productTitle:"round sunglasses",
          description:"360$",
          productImage:"https://www.chanel.com/images//t_one/t_fashion//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/round-sunglasses-black-acetate-metal-acetate-metal-packshot-default-a71397x06081s8816-8837386731550.jpg"
          },
          {
            productTitle:"round calfskin sunglasses",
            description:"520$",
            productImage:"https://www.chanel.com/images//t_one/t_fashion//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/round-sunglasses-gold-metal-calfskin-metal-calfskin-packshot-default-a71292x06073l4633-8830535499806.jpg"
            },
    

  ];

}
