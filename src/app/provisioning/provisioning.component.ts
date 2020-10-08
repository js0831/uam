import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/services/api.service';
import { STATIC_DATA } from '../shared/data/static.data';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-provisioning',
  templateUrl: './provisioning.component.html',
  styleUrls: ['./provisioning.component.scss']
})
export class ProvisioningComponent implements OnInit {

  private isStaticData = environment.staticData;

  firstLeveldata = {
    jobDuties: STATIC_DATA.jobDuties,
    channels: STATIC_DATA.channels,
    businessRoles: STATIC_DATA.businessRoles,
  };

  applications = STATIC_DATA.applications;
  selectedApplications = [];

  applicationForm: FormGroup;
  levelOneForm: FormGroup;
  levelTwoForm: FormGroup;

  commonAttributesForms = {
    FunctionalGroup: 'function_group_id',
    CenterCD: 'center_cd',
    ChannelsID: 'channel_id',
    ChannelsCD: 'channel_cd'
  };

  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForms();

    if (!this.isStaticData) {
      this.resetData();
      this.loadFirstLevelData();
      this.getApplications();
    }
  }

  private buildForms(): void {
    this.applicationForm = this.fb.group({
      application: ['', Validators.required]
    });
    this.levelOneForm = this.fb.group({
      business_role_id: ['', Validators.required],
      channel_id: ['', Validators.required],
      job_duty_id: ['', Validators.required]
    });

    this.levelTwoForm = new FormGroup({
      applications: new FormArray([])
    });
  }

  get applicationsFormArray(): FormArray {
    return this.levelTwoForm.get('applications') as FormArray;
  }

  async addApplication(): Promise<any> {
    if (this.applicationForm.invalid) {
      return;
    }
    const appId = this.applicationForm.value.application;
    let app = this.applications.filter( x =>  x.id.toString() === appId)[0] as any;

    const attributes = await this.getApplicationAttributes(appId);

    this.buildApplicationsFormArray(appId);

    app = {
      ...app,
      attributes
    };
    this.selectedApplications.push(app);
    this.applicationForm.reset();
    return;
  }

  private buildApplicationsFormArray(appId): void{
    this.applicationsFormArray.push(this.fb.group({
      app_id: [appId, Validators.required],
      center_cd: ['', Validators.required],
      channel_cd: ['', Validators.required],
      channel_id: ['', Validators.required],
      function_group_id: ['', Validators.required],
    }));
  }

  getAttributeFormName(attributeName): string{
    const attrNameNoSpace = attributeName.replace(/\ /g, '');
    return this.commonAttributesForms[attrNameNoSpace];
  }

  async getApplicationAttributes(appId): Promise<any[]> {
    const attributes = await this.api.list('attribute/getAllAppAttribute', { appId }).toPromise();

    const attributesWithOptions = [];
    for await (const attr of attributes) {
      const options = await this.getAttributeOptions(appId, attr.category);
      attributesWithOptions.push({
        ...attr,
        options
      });
    }
    return attributesWithOptions;
  }

  async getAttributeOptions(appId, category ): Promise<any> {
    const options = await this.api.list('attribute/findValuesByCategory', { appId, category}).toPromise();
    return options;
  }

  isAppAlreadySelected(id): boolean{
    return this.selectedApplications.filter( x => x.id === id).length > 0;
  }

  removeApplication(id, index): void {
    this.selectedApplications = this.selectedApplications.filter( x =>  x.id !== id);
    this.applicationsFormArray.removeAt(index);

    console.log(this.levelTwoForm.value);
  }

  private resetData(): void{
    this.firstLeveldata = {
      jobDuties: [],
      channels: [],
      businessRoles: [],
    };

    this.applications = [];
  }

  private getApplications(): void {
    this.getListOf('application').then( x => {
      this.applications = x;
    });
  }

  private loadFirstLevelData(): void{
    this.getListOf('job-duty').then( x => {
      this.firstLeveldata.jobDuties = x;
    });
    this.getListOf('business-role').then( x => {
      this.firstLeveldata.businessRoles = x;
    });
    this.getListOf('channel').then( x => {
      this.firstLeveldata.channels = x;
    });
  }

  private getListOf(entity): Promise<any>{
    return new Promise( (res, rej) => {
      this.api.list(entity, {limit: 999, offset: 0}).subscribe( x => {
        res(x);
      });
    });
  }

  save(): void {
    if (this.levelOneForm.invalid || this.levelTwoForm.invalid) {
      return;
    }

    const levelOne  = this.levelOneForm.value;
    const levelTwo  = this.levelTwoForm.value;
    const data = {
      ...levelOne,
      applications: [
        ...levelTwo.applications
      ]
    };

    console.log(data);
    this.api.create('preset', data).subscribe( x => {
      this.levelOneForm.reset();
      this.levelTwoForm.reset();
    });
  }

  // getAttributeOptions(attrID): any {
  //   return STATIC_DATA.attributes.filter ( x => x.id === attrID)[0];
  // }
}
