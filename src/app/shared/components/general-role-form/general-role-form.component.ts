import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessJobRoleService } from '../../services/business-job-role.service';
import { ChannelService } from '../../services/channel.service';
import { OrganizationService } from '../../services/organization.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-general-role-form',
  templateUrl: './general-role-form.component.html',
  styleUrls: ['./general-role-form.component.scss']
})
export class GeneralRoleFormComponent implements OnInit {

  @Input() title: string;
  @Input() parentForm: FormGroup;

  list: {
    organization: any[],
    team: any[],
    channel: any[],
    jobrole: any[],
  } = {
    organization: [],
    team: [],
    channel: [],
    jobrole: [],
  };


  constructor(
    private fb: FormBuilder,
    private organizationService: OrganizationService,
    private channelService: ChannelService,
    private teamService: TeamService,
    private businessJobRoleService: BusinessJobRoleService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.fetchOrganizations();
    this.fetchChannels();
    this.fetchTeams();
    this.fetchBusinessJobRole();
  }

  private async fetchBusinessJobRole() {
    const response = await this.businessJobRoleService.fetch();
    this.list.jobrole = response || [];
  }

  private async fetchTeams() {
    const response = await this.teamService.fetch();
    this.list.team = response || [];
  }

  private async fetchOrganizations() {
    const response = await this.organizationService.fetch();
    this.list.organization = response || [];
  }

  private async fetchChannels() {
    const response = await this.channelService.fetch();
    this.list.channel = response || [];
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
