import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-role-list',
  templateUrl: './general-role-list.component.html',
  styleUrls: ['./general-role-list.component.scss']
})
export class GeneralRoleListComponent implements OnInit {

  generalRoles = [];

  constructor() { }

  ngOnInit(): void {
    this.generalRoles = JSON.parse(localStorage.getItem('general-roles')) || [];
  }

  remove(generalRole) {
    if (confirm('Are you sure you want to remove this general role?')) {
      console.log(this.generalRoles);
      console.log(generalRole);
      this.generalRoles = this.generalRoles.filter(item => item.id != generalRole.id);
      localStorage.setItem('general-roles', JSON.stringify(this.generalRoles));
    }
  }
}
