import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(fragrances: any[], searchTerm: string): any[] {
   if(!fragrances || !searchTerm){
     return fragrances
   }
   else{
     return fragrances.filter(fragObj=>fragObj.productTitle.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1  )
   }
  }

}
