import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { LocalDataService } from 'src/app/shared/services/local-data.service';
import { environment } from 'src/environments/environment';
import { IApplication } from '../application/application.component';


export interface IApplicationAttribute  {
  id: string;
  type: string;
  translations: any[];
}

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.scss']
})
export class ApplicationViewComponent implements OnInit {

  public application: IApplication;
  public applicationAttributes: any[] = [];
  public modalTitle: string;
  public saveButtonText: string;
  public editId: string;
  public form: FormGroup;
  public showModal = false;
  public isExistingAttribute = false;
  public allAttributes = [];

  // TEMP
  activeTab = 'details';

constructor(
    private formBuilder: FormBuilder,
    private localdata: LocalDataService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.buildForm();

    this.application = this.localdata.get('application');

    if (environment.staticData){
      const values = this.localdata.get('applicationAttributes');
      this.getAllAttributes();
      if (!values){
        return;
      }

      const appId = this.application.systemId.replace(/\ /g, '_').toLowerCase();
      this.applicationAttributes = values[`app-attr-${appId}`] || [];
      return;
    }

    this.applicationAttributes = [];
    this.getApplicationAttribute(this.application.systemId);
  }

  getAllAttributes(): any{
    const values = this.localdata.get('applicationAttributes');
    if (!values){
      return;
    }
    Object.values(values).forEach((attrs: any) => {
      this.allAttributes = [
        ...this.allAttributes,
        ...attrs
      ];
    });
    return values;
  }

  hasAttribute(id): boolean{
    return this.applicationAttributes.filter( x => x.attbId === id).length > 0;
  }

  toggleExistingAttribute(): void{
    this.isExistingAttribute = !this.isExistingAttribute;
    this.form.reset();
  }

  private saveLocalData(): void {
    const appId = this.application.systemId.replace(/\ /g, '_').toLowerCase();
    const toSave = {
      ['app-attr-' + appId]: this.applicationAttributes
    };
    const oldvalues = this.localdata.get('applicationAttributes');
    if (!oldvalues){
      this.localdata.save('applicationAttributes', {
        ...toSave
      });
    } else {
      this.localdata.save('applicationAttributes', {
        ...oldvalues,
        ...toSave
      });
    }
  }

  getApplicationAttribute(id: string): void{
    this.api.list('applicationroleattribute/getApplicationRoleAttribute', {
      systemId: id
    }).subscribe( x => {
      this.applicationAttributes = x.roleAttr;
      console.log(x.roleAttr);
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      type: ['', [Validators.required]],
      existing: ['', []],
    });
  }


  showAppForm(type: string, app?: any): void {
    if (type === 'add') {
      this.modalTitle = 'New Attibute';
      this.saveButtonText = 'Save';
      this.editId = null;
    } else {
      this.editId = app.attbId;
      this.saveButtonText = 'Update';
      this.modalTitle = `Edit ${app.attbId}`;
      this.form.get('id').patchValue(app.attbId);
      this.form.get('type').patchValue(app.attbType);
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
    this.isExistingAttribute = false;
  }


  submitForm(): void{
    this.form.markAllAsTouched();

    if (this.isExistingAttribute) {
      const attrId = this.form.value.existing;
      if (attrId.length === 0){
        return;
      }
      const attribute = this.allAttributes.filter( x => x.attbId === attrId)[0];
      this.applicationAttributes.push(attribute);
      this.saveLocalData();
      this.form.reset();
      this.showModal = false;
      this.isExistingAttribute = false;
      return;
    }

    if (this.form.invalid) {
      alert('All fields are required');
      return;
    }

    const {id, type, translations}: IApplicationAttribute = this.form.value;

    const data = {
      attbId: id,
      attbType: type,
      attbTitle: id,
      systemId: this.application.systemId,
      translations: translations.map( x => {
        return {
          keyVal: id,
          langId: Number(x.language),
          value: x.value
        };
      })
    };

    if (!this.editId) {
      if (environment.staticData) {
        this.applicationAttributes.push(data);
        this.saveLocalData();
        this.editId = id;
        this.modalTitle = 'Edit ' + id;
        this.saveButtonText = 'Update';
        // this.form.reset();
        return;
      }

      this.api.create('roleattribute/createRoleAttribute', data).subscribe( x => {
        this.showModal = false;
        this.form.reset();
      });
    } else {
      this.updateAttribute(data, this.editId);
    }
  }

  updateAttribute(data, oldId): void {

    if (environment.staticData) {
      this.applicationAttributes = this.applicationAttributes.filter( x => x.attbId !== oldId);
      this.applicationAttributes.push(data);
      this.saveLocalData();
      this.form.reset();
      this.showModal = false;
      return;
    }

    this.api.create('roleattribute/updateRoleAttribute', {
      ...data,
      oldAttbId: oldId,
    }).subscribe( x => {
      this.showModal = false;
      this.form.reset();
    });
  }

  async delete(app: any): Promise<any> {
    const sure = confirm('Are you sure?');
    if (!sure){
      return;
    }

    if (environment.staticData) {
      this.applicationAttributes = this.applicationAttributes.filter( x => x.attbId !== app.attbId);
      this.saveLocalData();
      return;
    }
    const data = {
      roleAttributeId: app.attbId,
      systemId: this.application.systemId
    };
    await this.api.create('applicationroleattribute/deleteApplicationRoleAttribute', data).toPromise();
    this.applicationAttributes = this.applicationAttributes.filter( x => app.attbId !== x.attbId);
  }

}
