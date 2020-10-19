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
    teams: STATIC_DATA.teams,
  };

  applications = STATIC_DATA.applications;
  selectedApplications = [];
  selectedRoles = [];

  applicationForm: FormGroup;
  levelOneForm: FormGroup;
  levelTwoForm: FormGroup;
  testForm: FormGroup;

  commonAttributesForms = {
    FunctionalGroup: 'function_group_id',
    Centers: 'center_cd',
    ChannelsID: 'channel_id',
    ChannelsCD: 'channel_cd'
  };

  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.testForm = this.fb.group({
      business_role_id: ['a'],
      channel_id: ['', Validators.required],
      job_duty_id: ['', Validators.required],
      team_id: ['', Validators.required]
    });
    return;
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
      business_role_id: [''],
      channel_id: ['', Validators.required],
      job_duty_id: ['', Validators.required],
      team_id: ['', Validators.required]
    });

    this.levelTwoForm = new FormGroup({
      applications: new FormArray([])
    });
  }

  get applicationsFormArray(): FormArray {
    return this.levelTwoForm.get('applications') as FormArray;
  }

  addRole(): void {
    const roleField = this.levelOneForm.get('business_role_id');
    if (roleField.value.length < 1) {
      return;
    }
    const selectedRole = this.firstLeveldata.businessRoles.filter( x => x.id.toString() === roleField.value);
    this.selectedRoles.push(selectedRole[0]);
    roleField.reset();
  }

  removeRole(id): void{
    this.selectedRoles = this.selectedRoles.filter(x => x.id !== id);
  }

  async addApplication(): Promise<any> {
    if (this.applicationForm.invalid) {
      return;
    }
    const appId = this.applicationForm.value.application;
    let app = this.applications.filter( x =>  x.id.toString() === appId)[0] as any;

    const attributes = await this.getApplicationAttributes(appId);
    const attributeDefaultValues: any = await this.getApplicationAttributeDefaults(appId);
    this.buildApplicationsFormArray(appId, attributeDefaultValues.defaultAppConfigs[0]);

    app = {
      ...app,
      attributes
    };
    this.selectedApplications.push(app);
    this.applicationForm.reset();
    return;
  }

  private buildApplicationsFormArray(appId, defaultValues): void{

    const arrayFormGroup = this.fb.group({
      app_id: [appId, Validators.required],
      center_cd: ['', Validators.required],
      channel_cd: ['', Validators.required],
      channel_id: ['', Validators.required],
      function_group_id: ['', Validators.required],
    });

    if (defaultValues) {
      arrayFormGroup.patchValue({
        center_cd: defaultValues.centerCD,
        channel_cd: defaultValues.channelCD,
        channel_id: defaultValues.channelId,
        function_group_id: defaultValues.functionGroupId,
      });
    }
    this.applicationsFormArray.push(arrayFormGroup);
  }

  getAttributeFormName(attributeName): string{
    const attrNameNoSpace = attributeName.replace(/\ /g, '');
    return this.commonAttributesForms[attrNameNoSpace];
  }

  async getApplicationAttributeDefaults(appId): Promise<any> {
    const levelOneForm = this.levelOneForm.value;
    if (
      !levelOneForm.business_role_id &&
      !levelOneForm.channel_id &&
      !levelOneForm.job_duty_id &&
      !levelOneForm.team_id
    ) {
      return new Promise((res, rej) => res({defaultAppConfigs: []}));
    }

    const levelOneData = {
      applicationId: appId,
      businessRoleId: levelOneForm.business_role_id,
      channelId: levelOneForm.channel_id,
      jobDutyId: levelOneForm.job_duty_id,
      teamId: levelOneForm.team_id
    };
    const defaults = await this.api.list('default-app-config/getDefaultAttributes', levelOneData).toPromise();
    return defaults;
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

  isRoleAlreadySelected(id): boolean {
    return this.selectedRoles.filter( x => x.id === id).length > 0;
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
      teams: []
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
    this.getListOf('team').then( x => {
      this.firstLeveldata.teams = x;
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
      alert('All Fields are required');
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
      alert('Success');
    });
  }

  // getAttributeOptions(attrID): any {
  //   return STATIC_DATA.attributes.filter ( x => x.id === attrID)[0];
  // }
}
