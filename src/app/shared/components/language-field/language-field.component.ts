import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-language-field',
  templateUrl: './language-field.component.html',
  styleUrls: ['./language-field.component.scss']
})
export class LanguageFieldComponent implements OnInit, OnDestroy{

  @Input() title = '';
  @Input() form: FormGroup;
  displayValue = '';
  isEdit = false;
  subscription: Subscription;

  sourceForm: FormGroup;
  languages = [
    {
      id: 'en',
      langCode: 'en'
    },
    {
      id: 'zh_HK',
      langCode: 'zh_HK'
    }
  ];

  constructor(
    private fb: FormBuilder,
    // private api: ApiService
  ) { }

  ngOnInit(): void {
    this.sourceForm = this.fb.group({
      language: ['en', Validators.required],
      value: ['', Validators.required]
    });

    this.form.addControl('translations', this.fb.array([], Validators.required));
    this.loadDisplayText();
    this.watchFormChanges();

    // if (environment.staticData){
    //   return;
    // }

    // this.languages = [];
    // this.api.list('language/getAllLanguage').subscribe( x => {
    //   this.languages = x.languages;
    // });
  }

  private watchFormChanges(): void {
    this.subscription = this.form.valueChanges.subscribe( x => {
      this.loadDisplayText();
    });
  }

  close(): void{
    this.loadDisplayText();
    this.isEdit = false;
  }

  private loadDisplayText(): void {
    setTimeout( x => {
      if (!this.translationsFormArray) {
        return;
      }
      const values = this.translationsFormArray.value;
      if (!values || values.length === 0){
        this.displayValue = '';
        return;
      }
      const found = values.filter( x => x.language === environment.language.toString());
      const fallback = found.length === 0 ? values[0].value : found[0].value;
      this.displayValue = fallback;
    }, 100);
  }

  ngOnDestroy(): void {
    this.form.removeControl('translations');
  }

  get translationsFormArray(): FormArray {
    return this.form.get('translations') as FormArray;
  }

  isInvalid(name: string): boolean{
    const control = this.sourceForm.get(name);
    return control.invalid && control.touched;
  }

  add(): void{
    if (this.sourceForm.invalid) {
      return;
    }

    const source = this.sourceForm.value;
    const group = this.fb.group({
      language: [source.language, Validators.required],
      value: [source.value, Validators.required]
    });

    this.translationsFormArray.push(group);
    this.sourceForm.reset();
  }

  isLanguageAdded(id): boolean{
    const addedValues = this.form.get('translations').value;
    return addedValues.filter(x => x.language === id.toString()).length > 0;
  }

  getLanguageName(id): string{
    const found = this.languages.filter(x => x.id.toString() === id);
    return found.length > 0 ? found[0].langCode : '';
  }

  delete(index): void{
    this.translationsFormArray.removeAt(index);
  }


  edit(): void{
    this.isEdit = true;
  }

}
