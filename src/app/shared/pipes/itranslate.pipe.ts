import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'itranslate'
})
export class ItranslatePipe implements PipeTransform {

  transform(values: any[], ...args: any[]): string {
    if (!values){
      return '';
    }
    const found = values.filter( x => x.langId === environment.language);
    console.log(values);
    return found.length > 0 ? found[0].value : '';
  }
}
