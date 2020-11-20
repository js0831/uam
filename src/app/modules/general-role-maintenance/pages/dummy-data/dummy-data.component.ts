import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrganizationInterface } from '../../../../shared/interface/organization.interface';
import { OrganizationService } from '../../../../shared/services/organization.service';
import { ChannelService } from '../../../../shared/services/channel.service';
import { TeamService } from '../../../../shared/services/team.service';
import { BusinessJobRoleService } from '../../../../shared/services/business-job-role.service';
import { ITranslates } from '../../../application-maintenance/interface/i-translates.interface';
import { ChannelInterface } from '../../../../shared/interface/channel.interface';

interface ListInterface {
  organization: OrganizationInterface[];
  team: ChannelInterface[];
  channel: any;
  jobrole: any;
}

@Component({
  selector: 'app-dummy-data',
  templateUrl: './dummy-data.component.html',
  styleUrls: ['./dummy-data.component.scss']
})
export class DummyDataComponent implements OnInit {

  model = {
    organization : '',
    team : '',
    channel : '',
    jobrole : '',
  };

  list: ListInterface = {
    organization : [],
    team : [],
    channel : [],
    jobrole : [],
  };

  organizationForm: FormGroup;
  channelForm: FormGroup;
  teamForm: FormGroup;
  businessJobRoleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private organizationService: OrganizationService,
    private channelService: ChannelService,
    private teamService: TeamService,
    private businessJobRoleService: BusinessJobRoleService
  ) { }

  ngOnInit(): void {
    this.organizationForm = this.formBuilder.group({});
    this.channelForm = this.formBuilder.group({});
    this.teamForm = this.formBuilder.group({});
    this.businessJobRoleForm = this.formBuilder.group({});
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

  private formatTranslation(translations: { language: string; value: string}[]): ITranslates {
    const translates: any = {};
    translations.forEach(item => {
      translates[item.language] = item.value;
    });
    return translates;
  }

  save(what): void{
    switch(what) {
      case 'organization': {
        this.saveOrganization();
        break;
      }
      case 'channel': {
        this.saveChannel();
        break;
      }
      case 'team': {
        this.saveTeam();
        break;
      }
      case 'jobrole': {
        this.saveBusinessJobRole();
        break;
      }
    }
  }

  private async saveBusinessJobRole() {
    const translates = this.formatTranslation(this.businessJobRoleForm.value.translations);
    const response = await this.businessJobRoleService.create(translates);
    this.list.jobrole.push(response);
  }

  private async saveTeam() {
    const translates = this.formatTranslation(this.teamForm.value.translations);
    const response = await this.teamService.create(translates);
    this.list.team.push(response);
  }

  private async saveChannel() {
    const translates = this.formatTranslation(this.channelForm.value.translations);
    const response = await this.channelService.create(translates);
    this.list.channel.push(response);
  }

  private async saveOrganization() {
    const translates = this.formatTranslation(this.organizationForm.value.translations);
    const response = await this.organizationService.create(translates);
    this.list.organization.push(response);
  }

  delete(item, what): void {
    if (confirm('Are you sure you want to delete this item?')) {
      switch(what) {
        case 'organization': {
          this.deleteOrganization(item);
          break;
        }
        case 'channel': {
          this.deleteChannel(item);
          break;
        }
        case 'team': {
          this.deleteTeam(item);
          break;
        }
        case 'jobrole': {
          this.deleteBusinessJobRole(item);
          break;
        }
      }
    }
  }

  private async deleteBusinessJobRole(jobrole: ChannelInterface) {
    await this.businessJobRoleService.delete(jobrole);
    this.list.jobrole = this.list.jobrole.filter(item => item.id !== jobrole.id);
  }

  private async deleteTeam(team: ChannelInterface) {
    await this.teamService.delete(team);
    this.list.team = this.list.team.filter(item => item.id !== team.id);
  }

  private async deleteChannel(channel: ChannelInterface) {
    await this.channelService.delete(channel);
    this.list.channel = this.list.channel.filter(item => item.id !== channel.id);
  }

  private async deleteOrganization(organization: OrganizationInterface) {
    await this.organizationService.delete(organization);
    this.list.organization = this.list.organization.filter(item => item.id !== organization.id);
  }

}
