import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAttribute } from 'src/app/modules/attribute-maintenance/interface/attribute.interface';
import { ApplicationService } from '../../../../shared/services/application.service';
import { LanguageFieldService } from '../../../../shared/services/language-field.service';
import { IApplication } from '../../interface/application.interface';
import { ITranslates } from '../../interface/i-translates.interface';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  form: FormGroup;
  subscription: Subscription;
  attributes: IAttribute[];
  application: IApplication;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private applicationService: ApplicationService,
    private languageFieldService: LanguageFieldService
  ) { }

  async ngOnInit() {
    this.application = await this.getApplication(this.activatedRoute.snapshot.params.id);
    this.form = this.formBuilder.group({
      applicationName: this.application.applicationName,
      isAllowMultiple: this.application.isAllowMultiple,
      translations: this.formBuilder.array([])
    });

    this.populateTranslationField();
  }

  private populateTranslationField() {
    const translates: ITranslates = this.application.translates;
    this.languageFieldService.appendCurrentTranslations([
      { language: 'en', value: translates.en },
      { language: 'zh_HK', value: translates.zh_Hk }
    ], this.form)
  }

  private async getApplication(id: string): Promise<IApplication> {
    return await this.applicationService.get(id);
  }

  private getTranslatesFromTranslationFormArray(): ITranslates {
    const formValue = this.form.value;
    const translates: ITranslates = this.application.translates;
    formValue.translations.forEach(item => {
      translates[item.language] = item.value;
    });
    translates.id = +translates.id;
    return translates;
  }

  async update() {
    const formValue = this.form.value;
    const translates: ITranslates = this.getTranslatesFromTranslationFormArray();
    const application: IApplication = {
      id: this.application.id,
      applicationName: formValue.applicationName,
      isAllowMultiple: formValue.isAllowMultiple,
      translates: translates
    };
    const response = await this.applicationService.update(application);
    this.application = response;
    this.router.navigate(['application-maintenance/list']);
  }

  cancel() {
    this.router.navigate(['application-maintenance/list']);
  }

}
