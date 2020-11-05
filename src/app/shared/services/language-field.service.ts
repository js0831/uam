import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageFieldService {

  constructor(
  ) { }

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
