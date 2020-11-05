import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAttributeStore } from '../../interface/attribute-store.interface';
import { addOption, deleteOption, setDefaultOption } from '../../store/attribute.actions';
import { IOption } from './../../interface/option.interface';
import { LanguageFieldService } from './../../../../shared/services/language-field.service';

@Component({
  selector: 'app-attribute-options',
  templateUrl: './attribute-options.component.html',
  styleUrls: ['./attribute-options.component.scss']
})
export class AttributeOptionsComponent implements OnInit, OnDestroy {

  @Input() attributeId: string;

  form: FormGroup;
  options: IOption[] = [];
  subscription: Subscription[] = [];
  showDescription = true;

  constructor(
    private fb: FormBuilder,
    private store: Store<{attribute: IAttributeStore}>,
    private languageFieldService: LanguageFieldService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.subscription = [
      this.watchAttributeStore()
    ];
  }

  private watchAttributeStore(): Subscription{
    return this.store.select('attribute').subscribe( x => {
      if ( x.edit ) {
        console.log('watchAttributeStore', x.edit);
        this.options = x.edit.options;
      }
    });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      id: [''],
      value: ['', Validators.required]
    });
  }

  add(): void {
    this.form.markAllAsTouched();
    if (!this.isValidForm()) {
      return;
    }

    const data = {
      id: new Date().getTime().toString(),
      value: this.form.value.value,
      isDefault: false,
      translations: this.form.value.translations
    };

    this.store.dispatch(addOption({
        id: this.attributeId,
        option: data
    }));
    this.form.reset();
    this.showDescription = false;
    setTimeout( x => {
      this.showDescription = true;
    });
  }

  private isValidForm(): boolean {
    if (this.form.invalid) {
      alert('All fields are required');
      return false;
    }
    const englishTranslationExist = this.form.value.translations.filter( x => x.language === '1');
    if (englishTranslationExist.length === 0) {
      alert('English Translation is required');
      return false;
    }
    return true;
  }

  delete(option: IOption): void {
    const sure = confirm('Are you sure?');
    if (!sure) { return; }

    this.store.dispatch(deleteOption({
      id: option.id
    }));
  }

  edit(option: IOption): void {
    this.form.get('id').patchValue(option.id);
    this.form.get('value').patchValue(option.value);
    this.languageFieldService.appendCurrentTranslations(option.translations, this.form);
  }

  setDefault(option: IOption): void{
    this.store.dispatch(setDefaultOption({
      option
    }));
  }

  cancelEdit(): void{
    this.form.reset();
    this.showDescription = false;
    setTimeout( x => {
      this.showDescription = true;
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach( x => x.unsubscribe());
  }
}
