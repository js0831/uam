import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-role-list',
  templateUrl: './general-role-list.component.html',
  styleUrls: ['./general-role-list.component.scss']
})
export class GeneralRoleListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  add(): void{
    this.router.navigate(['general-role-maintenance', 'form']);
  }

  edit(): void{
    this.router.navigate(['general-role-maintenance', 'form']);
  }

  delete(): void {

  }
}
