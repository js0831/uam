import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Store } from '@ngrx/store';
import { create, edit, update } from './../../store/attribute.actions';
import { LanguageFieldService } from './../../../../shared/services/language-field.service';
import { ApplicationAttributeService } from './../../../../shared/services/application-attribute.service';
import { ApplicationAttributeInterface } from './../../../../shared/interface/application-attribute.interface';

@Component({
  selector: 'app-attribute-form',
  templateUrl: './attribute-form.component.html',
  styleUrls: ['./attribute-form.component.scss']
})
export class AttributeFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  subscription: Subscription[];

  modalTitle = 'Add New Attribute';
  submitButtonText = 'Save';
  showModal = false;

  editAttribute: ApplicationAttributeInterface;

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private store: Store<any>,
    private applicationAttributeService: ApplicationAttributeService,
    private languageFieldService: LanguageFieldService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.subscription = [
      this.listenModalEvent(),
      this.watchAttributeStore()
    ];
  }

  private watchAttributeStore(): Subscription{
    return this.store.select('attribute').subscribe( x => {
      if (x.edit) {
        this.editAttribute = x.edit;
        this.showModal = true;
        this.modalTitle = 'Edit ' + x.edit.id;
        this.submitButtonText = 'Update';
        setTimeout( y => {
          this.fillAttributeForm(x.edit);
        });
      }
    });
  }

  private fillAttributeForm(data): void {
    this.form.patchValue(data);
    const translation = [];
    Object.keys(data.translation).forEach(key => {
      if (key !== 'id' && data.translation[key]) {
        translation.push({
          language: key,
          value: data.translation[key]
        });
      }
    });
    this.languageFieldService.appendCurrentTranslations(translation, this.form);
  }

  private listenModalEvent(): Subscription{
    return this.modalService.event.subscribe( (x: any) => {
      if (!x.data) { return; }
      if (x.data.modalId === 'ATTRIBUTE_FORM' && x.event === 'SHOW_MODAL') {
        this.showModal = x.data.value;
      }
    });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      id: [''],
      attbName: ['', [Validators.required]],
      attbType: ['', [Validators.required]],
    });
  }

  closeModal(): void {
    this.showModal = false;
    this.submitButtonText = 'Save';
    this.modalTitle = 'Add New Attribute';
    this.form.reset();
  }

  private transformTranslates(formValue): ApplicationAttributeInterface {
    const translates: any = {};
    formValue.translations.forEach(item => {
      translates[item.language] = item.value;
    });
    return {
      attbName: formValue.attbName,
      attbType: formValue.attbType,
      translation: translates
    };
  }

  async submitForm(): Promise<void> {
    this.form.markAllAsTouched();
    if (!this.isValidForm()) {
      return;
    }
    const values = this.form.value;
    if (!values.id) {
      this.createAttribute(this.transformTranslates(values));
      return;
    } else {
      await this.updateAttribute(this.transformTranslates(values));
    }

    this.closeModal();
  }

  private async createAttribute(data: any): Promise<ApplicationAttributeInterface> {
    const response = await this.applicationAttributeService.create(data);
    this.store.dispatch(create({
      attribute: response
    }));
    this.store.dispatch(edit({attribute: response}));
    return response;
  }

  private async updateAttribute(data: any): Promise<void> {
    const updateData: ApplicationAttributeInterface = {
      ...data,
      id: this.editAttribute.id,
      translation: {
        ...data.translation,
        id: this.editAttribute.translation.id
      }
    };
    const response = await this.applicationAttributeService.update(updateData);
    this.store.dispatch(update({
      attribute: response
    }));
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

  ngOnDestroy(): void {
    this.subscription.forEach( x => x.unsubscribe());
  }
}
