import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAttribute } from 'src/app/modules/attribute-maintenance/interface/attribute.interface';
import { LocalDataService } from 'src/app/shared/services/local-data.service';
import { IApplicationStore } from '../../interface/application-store.interface';
import { update } from '../../store/application.actions';
import { LanguageFieldService } from './../../../../shared/services/language-field.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  toEditApplication: any;
  subscription: Subscription;
  attributes: IAttribute[];

  constructor(
    private formBuilder: FormBuilder,
    private localData: LocalDataService,
    private router: Router,
    private store: Store<{application: IApplicationStore}>,
    private languageFieldService: LanguageFieldService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.toEditApplication = this.localData.get('editApplication');

    if (!this.toEditApplication) {
      this.subscription = this.store.select('application').subscribe( x => {
        if (!x.edit) {
          this.cancel();
          return;
        }
        this.toEditApplication = x.edit;
        this.localData.save('editApplication', x.edit);
        this.fillFormToEdit();
      });
      return;
    }

    this.fillFormToEdit();
  }

  private fillFormToEdit(): void{
    this.form.patchValue({
      id: this.toEditApplication.id,
      systemId: this.toEditApplication.systemID,
      allowMultiple: this.toEditApplication.allowMultiple
    });

    setTimeout( x => {
      this.languageFieldService.appendCurrentTranslations(this.toEditApplication.translations, this.form);
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: [''],
      systemId: ['', [Validators.required]],
      allowMultiple: false
    });
  }

  update(): void {
    const form = this.form.value;
    const data = {
      id: form.id,
      systemID: form.systemId,
      allowMultiple: form.allowMultiple,
      translations: form.translations,
      attributes: this.attributes
    };

    this.store.dispatch(
      update({application: data})
    );
    alert('success');
    this.router.navigate(['application-maintenance']);
  }

  onAttributeSelect(attributes: IAttribute[]): void {
    this.attributes = attributes;
  }

  cancel(): void{
    this.router.navigate(['application-maintenance']);
  }

  ngOnDestroy(): void {
    this.localData.delete('editApplication');

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
