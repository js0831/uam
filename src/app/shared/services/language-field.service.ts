import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LanguageFieldService {
  appendCurrentTranslations(translations: {language: any, value: string}[], form: FormGroup): void{
    translations.forEach( x => {
      const group = new FormGroup({
        language: new FormControl(x.language.toString(), [Validators.required]),
        value: new FormControl(x.value, [Validators.required]),
      });
      (form.get('translations') as FormArray).push(group);
    });
  }
}
