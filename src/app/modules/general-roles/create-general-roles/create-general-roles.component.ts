import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  levelOneForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.buildForms();
    this.loadFirstLevelData();
  }

  private buildForms(): void {
    this.levelOneForm = this.fb.group({
      business_role_id: [''],
      channel_id: ['', Validators.required],
      job_duty_id: ['', Validators.required],
      team_id: ['', Validators.required],
      from_date: [],
      to_date: []
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

