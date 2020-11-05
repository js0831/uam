import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Store } from '@ngrx/store';
import { create, edit, update } from './../../store/attribute.actions';
import { LanguageFieldService } from './../../../../shared/services/language-field.service';

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

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private store: Store<any>,
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
      if ( x.edit ) {
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
    this.languageFieldService.appendCurrentTranslations(data.translations, this.form);
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
      guid: [''],
      id: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  closeModal(): void {
    this.showModal = false;
    this.submitButtonText = 'Save';
    this.modalTitle = 'Add New Attribute';
    this.form.reset();
  }

  submitForm(): void {
    this.form.markAllAsTouched();
    if (!this.isValidForm()) {
      return;
    }
    const values = this.form.value;
    if (!values.guid) {
      this.createAttribute(values);
      return;
    } else {
      this.updateAttribute(values);
    }

    this.closeModal();
  }

  private createAttribute(data: any): void {
    const payload = {
      ...data,
      guid: new Date().getTime().toString(),
      options: []
    };
    this.store.dispatch(create({
      attribute: payload
    }));
    this.store.dispatch(edit({attribute: payload}));
  }

  private updateAttribute(data: any): void {
    this.store.dispatch(update({
      attribute: data
    }));
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

  ngOnDestroy(): void {
    this.subscription.forEach( x => x.unsubscribe());
  }
}
