import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'itranslate'
})
export class ItranslatePipe implements PipeTransform {

  transform(values: any[], ...args: any[]): string {
    if (!values || values.length === 0){
      return '';
    }
    const found = values.filter( x => x.langId === environment.language);
    const fallback = found.length === 0 ? values[0].value : found[0].value;
    return fallback;
  }
}
