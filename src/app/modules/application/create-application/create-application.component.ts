import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EVENTS, EventService } from '../../../shared/services/event.service';
import { ApplicationService } from '../../../shared/services/application.service';
import { ICreateApplicationRequestBody } from '../../../shared/interfaces/i-create-application-request-body';
import { ITranslation } from '../../../shared/interfaces/i-translation';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss']
})
export class CreateApplicationComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public showModal: boolean;
  public saveButtonText = 'Save';
  public loading: boolean;

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.watchEvents();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  closeModal(): void {
    this.form.reset();
    this.showModal = false;
  }

  async submit(): Promise<void> {
    const value = this.form.value;
    const translation: ITranslation = this.formatTranslations(value.translations);
    const body: ICreateApplicationRequestBody = {
      application: {
        allowMultiple: value.allowMultiple,
        applicationId: value.systemId,
        translation
      }
    };

    this.validateAllFields();
    this.validateRequiredLanguage(body);
    this.loading = true;
    const response = await this.sendCreateRequest(body);
    console.log(response);
  }

  private async sendCreateRequest(body: ICreateApplicationRequestBody) {
    try {
      const response = await this.applicationService.create(body).toPromise();
      this.loading = false;
      this.showModal = false;
      this.form.reset();
      this.form.get('translations').reset();
      return response;
    } catch (error) {
      this.loading = false;
    }
  }

  private watchEvents(): void {
    this.subscriptions.push(
      this.eventService.getEvent().subscribe(({ type }) => {
        if (type === EVENTS.SHOW_ADD_APP_MODAL) {
          this.openModal();
        }
      })
    );
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      systemId: ['', [Validators.required]],
      allowMultiple: false
    });
  }

  private openModal(): void {
    this.showModal = true;
  }

  private validateAllFields() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      alert('All fields are required!');
      throw new Error('All fields are required!');
    }
  }

  private validateRequiredLanguage(body: ICreateApplicationRequestBody): void {
    if (!this.englishTranslationExists(body)) {
      alert('English translation is required!');
      throw new Error('English translation is required!');
    }
  }

  private englishTranslationExists(body: ICreateApplicationRequestBody): boolean {
    return !!body.application.translation.en;
  }

  private formatTranslations(translations) {
    const translation: ITranslation = {
      en: '',
      zhHK: ''
    };
    translations.forEach(item => {
      translation[item.language.replace(/_/g, '')] = item.value;
    });
    return translation;
  }
}
