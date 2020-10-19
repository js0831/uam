import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'itranslate'
})
export class ItranslatePipe implements PipeTransform {

  transform(values: any[], ...args: any[]): string {
    const found = values.filter( x => x.langId === environment.language);
    return found.length > 0 ? found[0].value : '';
  }
}
