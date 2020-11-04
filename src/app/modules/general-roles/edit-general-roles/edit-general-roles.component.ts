import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-edit-general-roles',
  templateUrl: './edit-general-roles.component.html',
  styleUrls: ['./edit-general-roles.component.scss']
})
export class EditGeneralRolesComponent implements OnInit, OnDestroy {

  generalRoles: IGeneralRoles;
  roleGroups: number[] = [1];
  form: FormGroup;
  private subscriptions: Subscription[] = [];
  private generalRole: IGeneralRole;


  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.generalRoles = JSON.parse(localStorage.getItem('localData'))['general-roles'];
    JSON.parse(localStorage.getItem('general-roles')).forEach(item => {
      if (item.id == this.activatedRoute.snapshot.params.generalRoleId) {
        this.generalRole = item;
      }
    });
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
    const { channel, organization, team, jobrole } = this.generalRole;
    this.form = this.formBuilder.group({
      channel: [channel.id, [Validators.required]],
      organization: [organization.id, [Validators.required]],
      team: [team.id, [Validators.required]],
      jobrole: [jobrole.id, [Validators.required]]
    });
  }

  private getRoleById(roleName: string, id: number) {
    return this.generalRoles[roleName].filter(role => role.id == id)[0];
  }

  update() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { channel, organization, team, jobrole } = this.form.value;
      const newGeneralRole: IGeneralRole = {
        channel: this.getRoleById('channel', channel),
        organization: this.getRoleById('organization', organization),
        team: this.getRoleById('team', team),
        jobrole: this.getRoleById('jobrole', jobrole),
        id: this.generalRole.id
      };
      let generalRoles: IGeneralRole[] = JSON.parse(localStorage.getItem('general-roles')) || [];
      generalRoles = generalRoles.map(item => {
        if (item.id == this.generalRole.id) {
          return newGeneralRole;
        }
        return item;
      });
      localStorage.setItem('general-roles', JSON.stringify(generalRoles));
      alert('General role updated');
    } else {
      alert('All general roles field are required');
    }
  }
}
