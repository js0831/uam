import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { IMultipleSelectionTag } from '../../../shared/interfaces/i-multiple-selection-tag';
import { IApplication } from '../../../shared/interfaces/iapplication';

interface ISelectionApplications extends IApplication {
  removed: boolean;
}

@Component({
  selector: 'app-create-general-roles',
  templateUrl: './create-general-roles.component.html',
  styleUrls: ['./create-general-roles.component.scss']
})
export class CreateGeneralRolesComponent implements OnInit {

  firstLeveldata = {
    jobDuties: [],
    channels: [],
    businessRoles: [],
    teams: [],
  };

  applicationAttributes = [];
  levelOneForm: FormGroup;
  applicationForm: FormGroup;
  applications: ISelectionApplications[] = [];
  selectedApplications = [];
  levelTwoForm: FormGroup;

  dateList = [new Date().getTime()];

  private isStaticData = environment.staticData;

  attributeOptions = [];

  selectedRoles = [];

  testForm: FormGroup;
  generalRoles: any;
  generalRole;

  multipleSelectionBusinessRoles: IMultipleSelectionTag[];
  selectedBusinessRoles: IMultipleSelectionTag[];

  commonAttributesForms = {
    FunctionalGroup: 'function_group_id',
    Centers: 'center_cd',
    ChannelsID: 'channel_id',
    ChannelsCD: 'channel_cd'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.buildForms();
    this.loadFirstLevelData();
  }

  private getApplicationBySystemId(systemId) {
    return this.applications.filter(item => item.systemId === systemId)[0];
  }

  toggleRemoveAppIfNotMultiple(appId: string) {
    this.applications = this.applications.map(item => {
      if (item.systemId === appId && !item.allowMultiple) {
        item.removed = !item.removed;
      }
      return item;
    });
  }

  async addApplication(): Promise<any> {
    if (this.applicationForm.invalid) {
      return;
    }

    const appId = this.applicationForm.value.application;
    const format = appId.replace(/\ /g, '_').toLowerCase();
    const attributes = this.applicationAttributes['app-attr-' + format];

    this.selectedApplications.push({
      id: new Date().getTime(),
      appId,
      attributes,
      application: this.getApplicationBySystemId(appId)
    });

    this.toggleRemoveAppIfNotMultiple(appId);
    this.applicationForm.reset();

    // let app = this.applications.filter( x =>  x.id.toString() === appId)[0] as any;
    // const attributes = await this.getApplicationAttributes(appId);
    // const attributeDefaultValues: any = await this.getApplicationAttributeDefaults(appId);
    // this.buildApplicationsFormArray(appId, attributeDefaultValues.defaultAppConfigs[0]);

    // app = {
    //   ...app,
    //   attributes
    // };
    // this.selectedApplications.push(app);
    // this.applicationForm.reset();
    return;
  }

  public addDate() {
    this.dateList.push(new Date().getTime());
  }

  public removeDate(date: number) {
    this.dateList = this.dateList.filter(item => item !== date);
  }

  private buildForms(): void {
    this.applicationForm = this.fb.group({
      application: ['', Validators.required]
    });
    this.levelOneForm = this.fb.group({
      business_role_id: [''],
      channel_id: ['', Validators.required],
      job_duty_id: ['', Validators.required],
      team_id: ['', Validators.required],
      from_date: [],
      to_date: []
    });
    this.levelTwoForm = new FormGroup({
      applications: new FormArray([])
    });
  }

  private loadFirstLevelData(): void{
    const data = JSON.parse(localStorage.getItem('localData'));
    if (data['general-roles']) {
      const generalRoles = data['general-roles'];
      console.log(generalRoles);
      this.firstLeveldata = {
        jobDuties: generalRoles.organization || [],
        channels: generalRoles.channel || [],
        businessRoles: generalRoles.jobrole || [],
        teams: generalRoles.team || [],
      };
    }
  }

  save(): void {
    if (this.levelOneForm.invalid) {
      alert('All Fields are required');
      return;
    }
    this.applicationForm.reset();
    this.saveGeneralRoleToLocalStorage(this.levelOneForm.value);
  }

  private saveGeneralRoleToLocalStorage(levelOne) {
    const generalRoles = JSON.parse(localStorage.getItem('general-roles')) || [];
    generalRoles.push({
      organization: this.firstLeveldata.jobDuties.filter(item => item.id == levelOne.job_duty_id)[0],
      channel: this.firstLeveldata.channels.filter(item => item.id == levelOne.channel_id)[0],
      team: this.firstLeveldata.teams.filter(item => item.id == levelOne.team_id)[0],
      businessJobRole: this.firstLeveldata.businessRoles.filter(item => item.id == levelOne.business_role_id)[0],
      id: new Date().getTime(),
      from_date: levelOne.from_date,
      to_date: levelOne.to_date
    });
    localStorage.setItem('general-roles', JSON.stringify(generalRoles));
    this.levelOneForm.reset();
  }
}

