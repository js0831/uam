import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventService } from '../../../shared/services/event.service';

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
export class CreateGeneralRolesComponent implements OnInit, OnDestroy {

  generalRoles: IGeneralRoles;
  roleGroups: number[] = [1];
  form: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private eventService: EventService) { }

  ngOnInit() {
    this.generalRoles = JSON.parse(localStorage.getItem('localData'))['general-roles'];
    this.buildForm();
    this.watchEvents();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  private watchEvents() {
    this.subscriptions.push(
      this.eventService.get().subscribe(event => {
        this.roleGroups.push(1);
      })
    );
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
