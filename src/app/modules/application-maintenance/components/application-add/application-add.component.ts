import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { create } from 'src/app/modules/application-maintenance/store/application.actions';
import { ModalService } from 'src/app/shared/services/modal.service';
import { IApplicationStore } from '../../interface/application-store.interface';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.scss']
})
export class ApplicationAddComponent implements OnInit, OnDestroy {

  subscription: Subscription[];

  form: FormGroup;
  showModal = false;
  submitButtonText = 'Save';
  modalTitle = 'Add new Application';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private store: Store<{application: IApplicationStore} >
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.subscription = [
      this.listenModalEvent(),
      // this.watchAttributeStore()
    ];
  }

  private listenModalEvent(): Subscription{
    return this.modalService.event.subscribe( (x: any) => {
      if (!x.data) { return; }
      if (x.data.modalId === 'APPLICATION_FORM' && x.event === 'SHOW_MODAL') {
        this.showModal = x.data.value;
      }
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      systemId: ['', [Validators.required]],
      allowMultiple: false
    });
  }

  closeModal(): void{
    this.showModal = false;
    this.form.reset();
    this.modalService.reset();
  }

  submitForm(): void {
    this.form.markAllAsTouched();
    if (!this.isValidForm()) {
      return;
    }

    const form = this.form.value;
    const data = {
      id: new Date().getTime().toString(),
      systemID: form.systemId,
      allowMultiple: form.allowMultiple,
      translations: form.translations
    };
    console.log(data);
    this.store.dispatch(create({application: data}));
    this.closeModal();
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
