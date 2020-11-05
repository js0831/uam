import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-general-role-form',
  templateUrl: './general-role-form.component.html',
  styleUrls: ['./general-role-form.component.scss']
})
export class GeneralRoleFormComponent implements OnInit {

  @Input() title: string;
  @Input() parentForm: FormGroup;

  dummyData: {
    organization: any[],
    team: any[],
    channel: any[],
    jobrole: any[],
  };


  constructor(
    private fb: FormBuilder,
    private localData: LocalDataService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.dummyData = this.localData.get('dummy-general-roles') || {
      organization : [],
      team : [],
      channel : [],
      jobrole : [],
    };

    console.log(this.dummyData);
  }

  private buildForm(): void {
    this.parentForm.addControl('generalRoles', this.fb.group({
      jobDuty: ['', Validators.required],
      channel: ['', Validators.required],
      team: ['', Validators.required],
      businessRole: ['', Validators.required]
    }));
  }

  isInvalid(name): boolean {
    const control = this.parentForm.get('generalRoles').get(name);
    return control.invalid && control.touched;
  }

}
