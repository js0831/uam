import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { create } from 'src/app/modules/application-maintenance/store/application.actions';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ApplicationService } from 'src/app/shared/services/application.service';
import { IApplicationStore } from '../../interface/application-store.interface';
import { IApplication } from '../../interface/application.interface';
import { ITranslates } from '../../interface/i-translates.interface';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.scss']
})
export class ApplicationAddComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  public form: FormGroup;
  public showModal: boolean = false;
  public submitButtonText: string = 'Save';
  public modalTitle: string = 'Add new Application';

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private applicationService: ApplicationService,
    private store: Store<{application: IApplicationStore} >
  ) { }

  public ngOnInit(): void {
    this.buildForm();
    this.subscriptions.push(this.listenModalEvent())
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private listenModalEvent(): Subscription{
    return this.modalService.event.subscribe((event: any) => {
      if (event.data && event.data.modalId === 'APPLICATION_FORM' && event.event === 'SHOW_MODAL') {
        this.showModal = event.data.value;
      }
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      systemId: ['', [Validators.required]],
      allowMultiple: false
    });
  }

  public closeModal(): void{
    this.showModal = false;
    this.form.reset();
    this.modalService.reset();
  }

  private formatTranslates(formValue: { language: string, value: string }[]): ITranslates {
    const translates = {};
    formValue.forEach(item => {
      translates[item.language] = item.value;
    })
    return translates as ITranslates;
  }

  private formatCreateApplicationData(): IApplication {
      const formValue = this.form.value;
      const data: IApplication = {
        applicationName: formValue.systemId,
        isAllowMultiple: formValue.allowMultiple,
        translates: this.formatTranslates(formValue.translations)
      };
      return data;
  }

  public async submit(): Promise<void> {
    this.form.markAllAsTouched();
    if (this.isValidForm()) {
      const response: IApplication = await this.applicationService.create(this.formatCreateApplicationData());
      console.log(response);
      this.store.dispatch(create({ payload: response }));
      this.closeModal();
    }
  }

  private isValidForm(): boolean {
    if (this.form.invalid) {
      alert('All fields are required');
      return false;
    }
    const englishTranslationExist = this.form.value.translations.filter(x => x.language === 'en');
    if (englishTranslationExist.length === 0) {
      alert('English Translation is required');
      return false;
    }
    return true;
  }

}
