import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface IRole {
  id: number;
  name: string;
}

interface IGeneralRoles {
  channel: IRole[];
  organization: IRole[];
  team: IRole[];
  jobrole: IRole[];
}

@Component({
  selector: 'app-create-general-roles-form',
  templateUrl: './create-general-roles-form.component.html',
  styleUrls: ['./create-general-roles-form.component.scss']
})
export class CreateGeneralRolesFormComponent implements OnInit {

  generalRoles: IGeneralRoles;
  @Input() public form: FormGroup;

  ngOnInit(): void {
    this.generalRoles = JSON.parse(localStorage.getItem('localData'))['general-roles'];
  }

}
