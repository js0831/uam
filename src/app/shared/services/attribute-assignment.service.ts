import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApplicationAttributeInterface } from '../interface/application-attribute.interface';

interface AppOrdering {
  applicationId: number;
  attbId: number;
  orderIndex: number;
}

@Injectable({
  providedIn: 'root'
})
export class AttributeAssignmentService {

  constructor(private httpClient: HttpClient) { }

  private url(url: string) {
    return `${environment.hostUrl}${url}`;
  }

  create(attribute: AppOrdering, orderList: number[]): Promise<ApplicationAttributeInterface[]> {
    return this.httpClient.post<{ lstRole: ApplicationAttributeInterface[] }>(this.url('/roleattribute/createRoleAttributeToApp'), { appOrdering: attribute, orderList })
      .toPromise()
      .then(response => response.lstRole);
  }

  fetch(appId: string): Promise<ApplicationAttributeInterface[]> {
    return this.httpClient.get<{ lstRole: ApplicationAttributeInterface[] }>(this.url('/roleattribute/getRoleAttributeByApp'), {
      params: { appId }
    })
      .toPromise()
      .then(response => response.lstRole);
  }

  delete(appOrdering: AppOrdering, orderList: number[]) {
    return this.httpClient.post(this.url('/roleattribute/deleteRoleAttributeFromApp'), { appOrdering, orderList })
      .toPromise();
  }
}
