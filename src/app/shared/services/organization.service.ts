import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';
import { OrganizationInterface } from '../interface/organization.interface';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private httpClient: HttpClient) { }

  private url(url: string) {
    return `${environment.hostUrl}${url}`;
  }

  create(translation: ITranslates): Promise<OrganizationInterface> {
    return this.httpClient.post<{ jobDuty: OrganizationInterface }>(this.url('/jobduty/createJobDuty'), {
      jobDuty: {
        name: '',
        translation
      }
    }).toPromise()
    .then(response => response.jobDuty);
  }

  fetch(): Promise<OrganizationInterface[]> {
    return this.httpClient.get<{ jobDuties: OrganizationInterface[] }>(this.url('/jobduty/getAllJobDuty'))
      .toPromise()
      .then(response => response.jobDuties);
  }

  delete(item: OrganizationInterface): Promise<{ deleteResult: string }> {
    return this.httpClient.post<{ deleteResult: string }>(this.url('/jobduty/deleteJobDuty'), {}, {
      params: {
        jobDutyId: item.id.toString()
      }
    }).toPromise();
  }
}
