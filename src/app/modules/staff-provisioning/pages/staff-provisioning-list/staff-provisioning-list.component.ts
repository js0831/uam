import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-provisioning-list',
  templateUrl: './staff-provisioning-list.component.html',
  styleUrls: ['./staff-provisioning-list.component.scss']
})
export class StaffProvisioningListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  add(): void{
    this.router.navigate(['staff-provisioning', 'form']);
  }

  edit(): void{
    this.router.navigate(['staff-provisioning', 'form']);
  }

  delete(): void {

  }
}
