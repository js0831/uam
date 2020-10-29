import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICreateApplicationRequestBody } from '../../../shared/interfaces/i-create-application-request-body';
import { ICustomApplicationFormat } from '../../../shared/interfaces/i-custom-application-format';
import { ITranslation } from '../../../shared/interfaces/i-translation';
import { ApplicationService } from '../../../shared/services/application.service';

@Component({
  selector: 'app-application-update-form',
  templateUrl: './application-update-form.component.html',
  styleUrls: ['./application-update-form.component.scss']
})
export class ApplicationUpdateFormComponent implements OnInit {

  public form: FormGroup;
  private application: ICustomApplicationFormat;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getApplication();
  }

  async update() {
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
    const response = await this.applicationService.update(body).toPromise();
    console.log(response);
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

  private buildForm() {
    this.form = this.formBuilder.group({
      applicationId: ['', [Validators.required]],
      allowMultiple: [false]
    });
  }

  private async getApplication() {
    const id = this.activatedRoute.snapshot.params.id;
    const response: { application: ICustomApplicationFormat } = await this.applicationService.getById(id).toPromise();
    this.setApplicationFormValues(response.application);
  }

  private generateTranslationFormGroup(language: string, value: string): FormGroup {
    return this.formBuilder.group({
      language: [language, Validators.required],
      value: [value, Validators.required]
    });
  }

  private setApplicationFormValues(application: ICustomApplicationFormat) {
    this.application = application;
    this.form.setValue({
      applicationId: this.application.systemDescription,
      allowMultiple: false,
      translations: []
    });
    (this.form.get('translations') as FormArray).push(this.generateTranslationFormGroup('en', (this.application.translation as any).en));
    (this.form.get('translations') as FormArray).push(this.generateTranslationFormGroup('zh_HK', (this.application.translation as any).zhHK));
  }

}
