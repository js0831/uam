import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { LocalDataService } from 'src/app/shared/services/local-data.service';
import { environment } from 'src/environments/environment';
import { IApplication } from '../../../shared/interfaces/iapplication';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  public language = environment.language;
  public modalTitle: string;
  public saveButtonText = 'Save';
  public form: FormGroup;
  public descriptionForm: FormGroup;
  public showModal = false;
  public editId: string;

  applications = [
    {
      systemId: 'SVC',
      systemDescription: 'SVC',
      allowMultiple: false,
      translations: [
        {
          id: 1,
          keyVal: 'SVC',
          langId: 1,
          value: 'Single View Customer'
        },
        {
          id: 2,
          keyVal: 'SVC',
          langId: 2,
          value: '单视图客户'
        }
      ]
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private localdata: LocalDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();

    if (environment.staticData){

      if (!this.localdata.get('applications')){
        this.localdata.save('applications', this.applications);
      } else {
        this.applications = this.localdata.get('applications');
      }

      return;
    }

    this.loadData();
  }

  private async loadData(): Promise<any>{
    this.applications = [];
    const list =  await this.api.list('application/getAllApplication').toPromise();
    this.applications = list.lstApplications;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      systemId: ['', [Validators.required]],
      allowMultiple: false
    });
  }

  showAppForm(type: string, app?: IApplication): void {
    if (type === 'add') {
      this.modalTitle = 'New Application';
      this.saveButtonText = 'Save';
      this.editId = null;
    } else {
      this.saveButtonText = 'Update';
      this.modalTitle = `Edit ${app.systemId}`;
      this.editId = app.systemId;
      this.form.get('systemId').patchValue(app.systemId);
      setTimeout( x => {
        this.appendCurrentTranslations(app.translations);
      }, 0);
    }

    this.showModal = true;
  }

  private appendCurrentTranslations(translations: any[]): void{
    translations.forEach( x => {
      const group = this.formBuilder.group({
        language: [x.langId.toString(), Validators.required],
        value: [x.value, Validators.required]
      });
      (this.form.get('translations') as FormArray).push(group);
    });
  }

  closeModal(): void {
    this.form.reset();
    this.showModal = false;
  }


  async submitForm(): Promise<any> {
    this.form.markAllAsTouched();
    const { systemId, translations, allowMultiple }: IApplication = this.form.value;
    if (this.form.invalid) {
      alert('All fields are required');
      return;
    }

    if (!this.englishExist(translations)) {
      alert('English translation is required');
      return;
    }

    this.showModal = false;
    const descriptions = translations.map( x => {
      return {
        keyVal: systemId,
        langId: Number(x.language),
        value: x.value
      };
    });

    const data = {
      systemDescription: systemId,
      systemId,
      translations: descriptions,
      allowMultiple
    };

    if (this.modalTitle.includes('Edit')) {
      // await this.updateApplication(data);
      return;
    }
    await this.createApplication(data);
  }


  // async updateApplication(data): Promise<any>{
  //   const updateData = {
  //     oldSystemId: this.editId,
  //     ...data
  //   };

  //   if (environment.staticData){
  //     this.updateApplicationList(data.systemId, updateData.translations);
  //     this.saveLocalData();
  //     return;
  //   }

  //   const updated = await this.api.create('application/updateApplication', updateData).toPromise();
  //   this.updateApplicationList(data.systemId, updated.application.translations);
  //   this.form.reset();
  // }

  private updateApplicationList(systemId, translations): void{
    this.applications = this.applications.map( x => {
      if ( x.systemId === this.editId ) {
        x.systemId = systemId;
        x.translations = translations;
      }
      return x;
    });
  }

  async createApplication(data): Promise<any>{
    if (environment.staticData){
      this.applications.push({
        systemId: data.systemId,
        systemDescription: data.systemId,
        allowMultiple: data.allowMultiple,
        translations: data.translations.map( x => {
          return {
            id: new Date().getTime(),
            ...x
          };
        })
      });
      this.saveLocalData();
      this.form.reset();
      return;
    }
    const saved = await this.api.create('application/createApplication', data).toPromise();
    this.form.reset();
    this.applications.push(saved.application);
  }

  englishExist(translations): boolean {
    const found = translations.filter( x => x.language === '1').length > 0;
    return found;
  }

  async delete(app: IApplication): Promise<any> {
    const sure = confirm('Are you sure?');
    if (!sure){
      return;
    }

    if (environment.staticData){
      this.applications = this.applications.filter( x => {
        return x.systemId !== app.systemId;
      });
      this.saveLocalData();
      return;
    }

    const data = {
      oldSystemId: app.systemId,
      ...app
    };
    await this.api.create('application/deleteApplication', data).toPromise();
    this.applications = this.applications.filter( x => x.systemId !== app.systemId);
  }

  view(app: IApplication): void{
    this.localdata.save('application', app);
    setTimeout( x => {
      this.router.navigate(['application', app.systemId]);
    }, 250);
  }

  private saveLocalData(): void{
    this.localdata.save('applications', this.applications);
  }
}
