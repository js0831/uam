import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JkWaitService } from 'jk-wait';
import { ApiService } from 'src/app/shared/services/api.service';
import { LocalDataService } from 'src/app/shared/services/local-data.service';
import { environment } from 'src/environments/environment';
import { IApplication } from '../../../shared/interfaces/iapplication';

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
  public editAttribute: any;
  public form: FormGroup;
  public applicationForm: FormGroup;
  public showModal = false;
  public isExistingAttribute = false;
  public allAttributes = [];
  public dragging: any;
  public dropping: any;
  public applications: IApplication[] = [];

  // TEMP
  activeTab = 'details';

constructor(
    private formBuilder: FormBuilder,
    private localdata: LocalDataService,
    private api: ApiService,
    private router: Router,
    private wait: JkWaitService
  ) {
    // TODO : remove if after api integration
    this.applications = JSON.parse(localStorage.getItem('localData')).applications;
  }

  ngOnInit(): void {
    this.application = this.localdata.get('application');
    this.buildForm();
    setTimeout( x => {
      this.appendCurrentTranslations(this.applicationForm, this.application.translations);
    }, 0);

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
    const sortedValues = this.applicationAttributes.sort(this.sortCompare);
    const toSave = {
      ['app-attr-' + appId]: sortedValues
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
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      type: ['', [Validators.required]],
      existing: ['', []],
    });
    this.applicationForm = this.formBuilder.group({
      systemId: [this.application.systemId, [Validators.required]],
      allowMultiple: [this.application.allowMultiple]
    });
  }


  showAppForm(type: string, app?: any): void {
    if (type === 'add') {
      this.modalTitle = 'New Attibute';
      this.saveButtonText = 'Save';
      this.editAttribute = null;
    } else {
      this.editAttribute = app;
      this.saveButtonText = 'Update';
      this.modalTitle = `Edit ${app.attbId}`;
      this.form.get('id').patchValue(app.attbId);
      this.form.get('type').patchValue(app.attbType);
      setTimeout( x => {
        this.appendCurrentTranslations(this.form, app.translations);
      }, 0);
    }

    this.showModal = true;
  }

  private appendCurrentTranslations(form, translations: any[]): void{
    translations.forEach( x => {
      const group = this.formBuilder.group({
        language: [x.langId.toString(), Validators.required],
        value: [x.value, Validators.required]
      });
      (form.get('translations') as FormArray).push(group);
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

    if (!this.editAttribute) {
      if (environment.staticData) {
        const order =  this.generateNextOrder();
        const atributeData = {
          ...data,
          order
        };
        this.applicationAttributes.push(atributeData);
        this.saveLocalData();
        this.editAttribute = atributeData;
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
      this.updateAttribute(data, this.editAttribute);
    }
  }

  updateAttribute(data, editAttribute): void {

    if (environment.staticData) {

      // update options id if id changed
      if (editAttribute.attbId !== data.attbId) {
          let allOptions = this.localdata.get('attributeOptions');
          if (Object.keys(allOptions).length > 0) {
            const attrId = editAttribute.attbId.replace(/\ /g, '_').toLowerCase();
            const atributeOptions = allOptions['attr-opts-' + attrId];
            delete allOptions['attr-opts-' + attrId];
            const newAttrId = data.attbId.replace(/\ /g, '_').toLowerCase();
            allOptions = {
              ...allOptions,
              ['attr-opts-' + newAttrId] : atributeOptions
            };
            this.localdata.save('attributeOptions', allOptions);
          }
      }


      this.applicationAttributes = this.applicationAttributes.filter( x => x.attbId !== editAttribute.attbId);
      this.applicationAttributes.push({
        ...data,
        order: editAttribute.order
      });
      this.saveLocalData();
      this.form.reset();
      this.showModal = false;
      return;
    }

    this.api.create('roleattribute/updateRoleAttribute', {
      ...data,
      oldAttbId: editAttribute.attbId,
    }).subscribe( x => {
      this.showModal = false;
      this.form.reset();
    });
  }

  sortCompare( a, b ): number{
    if ( a.order < b.order ){
      return -1;
    }
    if ( a.order > b.order ){
      return 1;
    }
    return 0;
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


  update(): void {
    const formValue = this.applicationForm.value;
    const translations = formValue.translations.map( x => {
      return {
        keyVal: formValue.systemId,
        langId: Number(x.language),
        value: x.value
      };
    });
    // const updateData = {
    //   oldSystemId: this.application.systemId,
    //   systemDescription: formValue.systemId,
    //   systemId: formValue.systemId,
    //   translations,
    // };

    // update application attributes id if id changed
    if (this.application.systemId !== formValue.systemId) {
      let allAttributes = this.localdata.get('applicationAttributes');
      if (Object.keys(allAttributes).length > 0) {
        const appId = this.application.systemId.replace(/\ /g, '_').toLowerCase();
        const appAtribute = allAttributes['app-attr-' + appId];
        delete allAttributes['app-attr-' + appId];
        const newAppId = formValue.systemId.replace(/\ /g, '_').toLowerCase();
        allAttributes = {
          ...allAttributes,
          ['app-attr-' + newAppId] : appAtribute
        };
        this.localdata.save('applicationAttributes', allAttributes);
      }
    }

    this.localdata.save('application' , {
      systemId: formValue.systemId,
      systemDescription: formValue.systemId,
      allowMultiple: formValue.allowMultiple,
      translations,
    });

    const apps = this.localdata.get('applications').map( x => {
      if (x.systemId === this.application.systemId) {
        x.systemId = formValue.systemId;
        x.systemDescription = formValue.systemId;
        x.allowMultiple = formValue.allowMultiple;
        x.translations = translations;
      }
      return x;
    });
    this.localdata.save('applications' , apps);

    this.wait.start();
    setTimeout( x => {
      alert('Success');
      this.wait.end();
    }, 500);

  }

  cancel(): void{
    this.router.navigate(['application']);
  }

  drag(attribute, event): void {
    this.dragging = attribute;
    event.dataTransfer.setData('attr', JSON.stringify(attribute));
  }

  dragend(): void{
    this.dragging = null;
    this.dropping = null;
  }

  allowDrop(ev, attribute): void{
    ev.preventDefault();
    this.dropping = attribute;
  }

  drop(ev, attribute): void{
    ev.preventDefault();
    const data = JSON.parse(ev.dataTransfer.getData('attr'));
    const newOrder = attribute.order;

    if (newOrder === data.order) {
      return;
    }

    this.applicationAttributes = this.applicationAttributes.map( x => {

      if (data.order > newOrder) {
        if (x.order === data.order){
          x.order = newOrder;
        } else if (x.order >= newOrder && x.order <= data.order) {
          x.order = x.order + 1;
        }
      } else {
        if (x.order === data.order){
          x.order = newOrder;
        } else if ( x.order <= newOrder && x.order >= data.order) {
          x.order = x.order - 1;
        }
      }

      return x;
    });
    this.saveLocalData();
  }

  generateNextOrder(): number {
    const keys = Object.keys(this.applicationAttributes);
    if (keys.length === 0) {
      return 0;
    }
    const lastkey = keys[keys.length - 1];
    return (this.applicationAttributes[lastkey].order) + 1;
  }
}
