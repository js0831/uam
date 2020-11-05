import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IApplication } from 'src/app/modules/application-maintenance/interface/application.interface';
import { IAttribute } from 'src/app/modules/attribute-maintenance/interface/attribute.interface';
import { IDateRange } from 'src/app/shared/interface/daterange.interface';

@Component({
  selector: 'app-general-role-maintenance',
  templateUrl: './general-role-maintenance.component.html',
  styleUrls: ['./general-role-maintenance.component.scss']
})
export class GeneralRoleMaintenanceComponent implements OnInit {

  resetFlag = true;
  form: FormGroup;
  generalRoleData: {
    daterange: IDateRange,
    attributes: IAttribute[],
    applications: IApplication[]
  }[] = [];

  data: {
    daterange: IDateRange,
    attributes: IAttribute[],
    applications: IApplication[]
  } = {
    daterange: null,
    attributes: [],
    applications: []
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({});
  }

  add(dateRange: IDateRange): void {
    this.data.daterange = dateRange;

    if (!this.isValidateGeneralRoleData()) { return; }
    this.generalRoleData.push(this.data);

    this.data = {
      daterange: null,
      attributes: [],
      applications: []
    };
    this.resetFlag = false;
    setTimeout( x => this.resetFlag = true, 100);
  }

  setAttributes(attributes: IAttribute[]): void{
    this.data.attributes = attributes;
  }
  setApplications(applications: IApplication[]): void{
    this.data.applications = applications;
  }

  cancel(): void{
    this.router.navigate(['general-role-maintenance']);
  }

  save(): void{
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      alert('Please fill required fields');
      return;
    }

    if (this.generalRoleData.length === 0) {
      alert('Attibutes and Applications Assigmnent are required');
      return;
    }

    console.log(this.form.value);
    console.log(this.generalRoleData);
    alert('Success');
    this.router.navigate(['general-role-maintenance']);
  }

  private isValidateGeneralRoleData(): boolean{
    if (this.data.attributes.length === 0) {
      alert('Attribute is required');
      return false;
    }

    if (this.data.applications.length === 0) {
      alert('Application is required');
      return false;
    }
    return true;
  }

  deleteAssigned(num: number): void {
    this.generalRoleData = this.generalRoleData.filter((item, index) => index !== num);
  }
}
