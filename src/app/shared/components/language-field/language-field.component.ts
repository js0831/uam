import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-language-field',
  templateUrl: './language-field.component.html',
  styleUrls: ['./language-field.component.scss']
})
export class LanguageFieldComponent implements OnInit, OnDestroy{

  @Input() form: FormGroup;

  sourceForm: FormGroup;
  languages = [
    {
      id: 1,
      name: 'en'
    },
    {
      id: 2,
      name: 'zh_HK'
    }
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.sourceForm = this.fb.group({
      language: ['', Validators.required],
      value: ['', Validators.required]
    });
    this.form.addControl('translations', this.fb.array([], Validators.required));
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
    return found.length > 0 ? found[0].name : '';
  }

  delete(index): void{
    this.translationsFormArray.removeAt(index);
  }
}
