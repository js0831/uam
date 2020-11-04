import { Component, OnInit } from '@angular/core';
import { IApplication } from '../../../shared/interfaces/iapplication';

interface IApplicationAttribute {
  attbId: string;
  attbTitle: string;
  attbType: string;
  order: number;
  systemId: string;
  options: IAttributeOption[];
}

interface IExtendedApplication extends IApplication {
  removed?: boolean;
}

interface ISelectedApplication extends IApplication {
  attributes: IApplicationAttribute[];
}

interface IApplicationAttributeRecord {
  [key: string]: IApplicationAttribute[];
}

interface IAttributeOptionRecord {
  [key: string]: IAttributeOption[];
}
interface IAttributeOption {
  default: boolean;
  id: number;
  translations: any[];
  value: string;
}

@Component({
  selector: 'app-application-assignment',
  templateUrl: './application-assignment.component.html',
  styleUrls: ['./application-assignment.component.scss']
})
export class ApplicationAssignmentComponent implements OnInit {

  applications: IExtendedApplication[] = [];
  selectedApps: ISelectedApplication[] = [];

  constructor() { }

  ngOnInit(): void {
    this.applications = JSON.parse(localStorage.getItem('localData')).applications;
    console.log(this.applications);
  }

  private getApplicationBySystemId(systemId: string): IApplication {
    return this.applications.filter(app => app.systemId === systemId)[0];
  }

  addApplication(systemId: string) {
    const applicationAttributes: IApplicationAttributeRecord = (JSON.parse(localStorage.getItem('localData')) || {}).applicationAttributes;
    const systemAttributes: IApplicationAttribute[] = applicationAttributes[`app-attr-${systemId.toLocaleLowerCase()}`];
    const attributeOptions: IAttributeOptionRecord = JSON.parse(localStorage.getItem('localData')).attributeOptions;
    systemAttributes.forEach((attribute, index) => {
      const optionKey: string = attribute.attbId.replace(/\s/g, '_').toLocaleLowerCase();
      const options: IAttributeOption[] = attributeOptions[`attr-opts-${optionKey}`];
      systemAttributes[index].options = options || [];
    });
    const application: IExtendedApplication = this.getApplicationBySystemId(systemId);
    const selectedApplication: ISelectedApplication = {
      ...application,
      attributes: systemAttributes || []
    };
    if (!application.allowMultiple) {
      application.removed = true;
    }
    this.selectedApps.push(selectedApplication);
  }

  remove(selectedApp: ISelectedApplication) {
    this.selectedApps = this.selectedApps.filter(app => app.systemId !== selectedApp.systemId);
    const application: IExtendedApplication = this.getApplicationBySystemId(selectedApp.systemId);
    if (!application.allowMultiple) {
      application.removed = false;
    }
  }

}
