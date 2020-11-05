import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IAttribute } from 'src/app/modules/attribute-maintenance/interface/attribute.interface';
import { IDateRange } from 'src/app/shared/interface/daterange.interface';

@Component({
  selector: 'app-staff-provisioning-form',
  templateUrl: './staff-provisioning-form.component.html',
  styleUrls: ['./staff-provisioning-form.component.scss']
})
export class StaffProvisioningFormComponent implements OnInit {

  form: FormGroup;
  resetFlag = true;

  staffInfoData: {
    daterange: IDateRange,
    attributes: IAttribute[],
    generalRole: any
  }[] = [];

  data: {
    daterange: IDateRange,
    attributes: IAttribute[],
    generalRole: any
  } = {
    daterange: null,
    attributes: [],
    generalRole: null
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({});
  }

  cancel(): void{
    this.router.navigate(['staff-provisioning']);
  }

  save(): void{
    this.form.get('information').markAllAsTouched();

    if (this.form.get('information').invalid) {
      alert('Please fill required fields');
      return;
    }

    if (this.staffInfoData.length === 0) {
      alert('General Role and Attribute assignment is required');
      this.form.get('generalRoles').markAllAsTouched();
      return;
    }

    alert('Success');
    this.router.navigate(['staff-provisioning']);
  }

  add(dateRange: IDateRange): void {
    this.form.get('generalRoles').markAllAsTouched();
    this.data.daterange = dateRange;
    if (!this.isValidateGeneralRoleData()) { return; }
    this.data.generalRole = this.form.value.generalRoles;
    this.staffInfoData.push(this.data);

    this.form.get('generalRoles').reset();
    this.data = {
      daterange: null,
      attributes: [],
      generalRole: null
    };
    this.resetFlag = false;
    setTimeout( x => this.resetFlag = true, 100);
  }

  setAttributes(attributes: IAttribute[]): void{
    this.data.attributes = attributes;
  }

  private isValidateGeneralRoleData(): boolean{
    if (this.form.get('generalRoles').invalid) {
      alert('All General Role fields are required');
      return;
    }
    if (this.data.attributes.length === 0) {
      alert('Attribute Assignment is required');
      return false;
    }
    return true;
  }

  deleteAssigned(num: number): void {
    this.staffInfoData = this.staffInfoData.filter((item, index) => index !== num);
  }
}
