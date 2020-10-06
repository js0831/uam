import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/services/api.service';
import { STATIC_DATA } from '../shared/data/static.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  form: FormGroup;

  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this. form = this.fb.group({
      application: ['', Validators.required]
    });

    if (!this.isStaticData) {
      this.resetData();
      this.loadFirstLevelData();
      this.getApplications();
    }
  }

  addApplication(): void {
    if (this.form.invalid) {
      return;
    }
    const app = this.applications.filter( x =>  x.id.toString() === this.form.value.application);
    this.selectedApplications.unshift(app[0]);
    this.form.reset();
  }

  isAppAlreadySelected(id): boolean{
    return this.selectedApplications.filter( x => x.id === id).length > 0;
  }

  removeApplication(id): void {
    this.selectedApplications = this.selectedApplications.filter( x =>  x.id !== id);
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

  getAttributeOptions(attrID): any {
    return STATIC_DATA.attributes.filter ( x => x.id === attrID)[0];
  }
}
