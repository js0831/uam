import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApplicationAttributeInterface } from '../interface/application-attribute.interface';

@Injectable({
  providedIn: 'root'
})
export class ApplicationAttributeService {

  constructor(private httpClient: HttpClient) { }

  private url(url: string) {
    return `${environment.hostUrl}${url}`;
  }

  public fetch(): Promise<ApplicationAttributeInterface[]> {
    return this.httpClient.get<{ lstRole: ApplicationAttributeInterface[] }>(this.url('/roleattribute/getAllRoleAttribute'))
      .toPromise()
      .then(response => response.lstRole);
  }

  public create(applicationAttribute: ApplicationAttributeInterface): Promise<ApplicationAttributeInterface> {
    return this.httpClient.post<{ roleAttr: ApplicationAttributeInterface }>(this.url('/roleattribute/createRoleAttribute'), { roleAttr: applicationAttribute })
      .toPromise()
      .then(response => response.roleAttr);
  }

  public update(applicationAttribute: ApplicationAttributeInterface): Promise<ApplicationAttributeInterface> {
    return this.httpClient.post<{ roleAttr: ApplicationAttributeInterface }>(this.url('/roleattribute/updateRoleAttribute'), { roleAttr: applicationAttribute })
      .toPromise()
      .then(response => response.roleAttr);
  }
}
