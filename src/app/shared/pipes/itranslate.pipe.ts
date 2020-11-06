import { Pipe, PipeTransform } from '@angular/core';
import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';

@Pipe({
  name: 'itranslate'
})
export class ItranslatePipe implements PipeTransform {

  private formatTranslationKeys(translations: ITranslates): ITranslates {
    const formattedTranslations: any = {};
    Object.keys(translations).forEach(key => {
      if (key !== 'id') {
        formattedTranslations[key.split('_')[0]] = translations[key];
      }
    });
    return formattedTranslations;
  }

  private getLocalTranslation(translations: ITranslates) {
    const localKey: string = navigator.language.split('-')[0];
    return translations[localKey] || null;
  }

  private getDefaultTranslation(translations: ITranslates) {
    return translations.en;
  }

  private getTranslation(translations: ITranslates): string {
    const localTranslation = this.getLocalTranslation(translations);
    return localTranslation || this.getDefaultTranslation(translations);
  }

  transform(translations: ITranslates, ...args: any[]): string {
    translations = this.formatTranslationKeys(translations);
    return this.getTranslation(translations);
  }
}
