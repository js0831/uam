import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';
import { BusinessJobRoleInterface } from '../interface/business-job-role.interface';

@Injectable({
  providedIn: 'root'
})
export class BusinessJobRoleService {

  constructor(private httpClient: HttpClient) { }

  private url(url: string) {
    return `${environment.hostUrl}${url}`;
  }

  create(translation: ITranslates): Promise<BusinessJobRoleInterface> {
    return this.httpClient.post<{ businessRole: BusinessJobRoleInterface }>(this.url('/businessRole/createBusinessRole'), {
      businessRole: {
        name: '',
        translation
      }
    }).toPromise()
    .then(response => response.businessRole);
  }

  fetch(): Promise<BusinessJobRoleInterface[]> {
    return this.httpClient.get<{ businessRole: BusinessJobRoleInterface[] }>(this.url('/businessRole/getAllBusinessRole'))
      .toPromise()
      .then(response => response.businessRole);
  }


  delete(item: BusinessJobRoleInterface): Promise<{ deleteResult: string }> {
    return this.httpClient.delete<{ deleteResult: string }>(this.url('/businessRole/deleteBusinessRole'), {
      params: {
        id: item.id.toString()
      }
    }).toPromise();
  }
}
