import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { } from '../../../shared/interfaces/iapplication';

interface IRole {
  id: number;
  name: string;
}

interface IGeneralRole {
  channel: IRole;
  organization: IRole;
  team: IRole;
  jobrole: IRole;
  id: number;
}

interface IGeneralRoles {
  channel: IRole[];
  organization: IRole[];
  team: IRole[];
  jobrole: IRole[];
}

@Component({
  selector: 'app-create-general-roles',
  templateUrl: './create-general-roles.component.html',
  styleUrls: ['./create-general-roles.component.scss']
})
export class CreateGeneralRolesComponent implements OnInit {

  generalRoles: IGeneralRoles;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generalRoles = JSON.parse(localStorage.getItem('localData'))['general-roles'];
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      channel: ['', [Validators.required]],
      organization: ['', [Validators.required]],
      team: ['', [Validators.required]],
      jobrole: ['', [Validators.required]]
    });
  }

  private getRoleById(roleName: string, id: number) {
    console.log(this.generalRoles[roleName]);
    return this.generalRoles[roleName].filter(role => role.id == id)[0];
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { channel, organization, team, jobrole } = this.form.value;
      console.log(channel, organization, team, jobrole);
      const newGeneralRole: IGeneralRole = {
        channel: this.getRoleById('channel', channel),
        organization: this.getRoleById('organization', organization),
        team: this.getRoleById('team', team),
        jobrole: this.getRoleById('jobrole', jobrole),
        id: new Date().getTime()
      };
      const generalRoles: IGeneralRole[] = JSON.parse(localStorage.getItem('general-roles')) || [];
      generalRoles.push(newGeneralRole);
      localStorage.setItem('general-roles', JSON.stringify(generalRoles));
      alert('Added new general role');
    } else {
      alert('All general roles field are required');
    }
  }
}
