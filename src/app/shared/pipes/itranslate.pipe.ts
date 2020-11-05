import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

const localMapper = {
    'en-US': 1,
    'zh-HK': 2
};

@Pipe({
  name: 'itranslate'
})
export class ItranslatePipe implements PipeTransform {

  private findTranslation(translations): any[] {
    const localLangId: number = localMapper[navigator.language];
    return translations.filter((x) => {
      return x.langId === localLangId;
    });
  }

  transform(translations: any[], ...args: any[]): string {
    if (translations && translations.length > 0){
      const found = this.findTranslation(translations);
      const fallback = found.length === 0 ? translations[0].value : found[0].value;
      return fallback;
    }
    return '';
  }
}
