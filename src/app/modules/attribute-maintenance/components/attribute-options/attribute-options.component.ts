import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAttributeStore } from '../../interface/attribute-store.interface';
import { addOption, deleteOption, setOptionsOnEdit, setDefaultOption } from '../../store/attribute.actions';
import { IOption } from './../../interface/option.interface';
import { LanguageFieldService } from './../../../../shared/services/language-field.service';
import { ApplicationAttributeOptionService } from './../../../../shared/services/application-attribute-option.service';
import { ITranslates } from '../../../application-maintenance/interface/i-translates.interface';
import { ApplicationAttributeService } from '../../../../shared/services/application-attribute.service';
import { ApplicationAttributeOptionInterface } from '../../../../shared/interface/application-attribute-option.interface';

@Component({
  selector: 'app-attribute-options',
  templateUrl: './attribute-options.component.html',
  styleUrls: ['./attribute-options.component.scss']
})
export class AttributeOptionsComponent implements OnInit, OnDestroy {

  @Input() attributeId: number;

  form: FormGroup;
  options: ApplicationAttributeOptionInterface[] = [];
  subscription: Subscription[] = [];
  showDescription = true;

  constructor(
    private fb: FormBuilder,
    private store: Store<{attribute: IAttributeStore}>,
    private languageFieldService: LanguageFieldService,
    private applicationAttributeOptionService: ApplicationAttributeOptionService,
    private applicationAttributeService: ApplicationAttributeService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.subscription = [
      this.watchAttributeStore(),
    ];
    this.fetchAttributeOptions()
  }

  private async fetchAttributeOptions() {
    const response = await this.applicationAttributeService.fetchAttributeOptions(this.attributeId);
    this.options = response.lstOptn;
    this.store.dispatch(setOptionsOnEdit({ payload: response.lstOptn }));
  }

  private watchAttributeStore(): Subscription{
    return this.store.select('attribute').subscribe( x => {
      if ( x.edit ) {
        this.options = (x.edit.options as any) || [];
      }
    });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      id: [''],
      value: ['', Validators.required]
    });
  }

  formatTranslation(translations: { language: string, value: string }[]): ITranslates {
    const formattedData: any = {};
    translations.forEach(item => formattedData[item.language] = item.value);
    return formattedData;
  }

  async add(): Promise<void> {
    this.form.markAllAsTouched();
    if (!this.isValidForm()) {
      return;
    }

    const data = {
      value: this.form.value.value,
      isDefault: this.options.length === 0,
      translation: this.formatTranslation(this.form.value.translations)
    };

    const response = await this.applicationAttributeOptionService.create(this.attributeId, data);

    this.store.dispatch(addOption({
        id: this.attributeId,
        option: response
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
    const englishTranslationExist = this.form.value.translations.filter( x => x.language === 'en');
    if (englishTranslationExist.length === 0) {
      alert('English Translation is required');
      return false;
    }
    return true;
  }

  async delete(option: ApplicationAttributeOptionInterface): Promise<void> {
    if (confirm('Are you sure?')) {
      await this.applicationAttributeOptionService.delete(this.attributeId, option);
      this.store.dispatch(deleteOption({
        id: option.id
      }));
    }
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
