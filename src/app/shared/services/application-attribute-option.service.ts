import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApplicationAttributeOptionInterface } from '../interface/application-attribute-option.interface';

@Injectable({
  providedIn: 'root'
})
export class ApplicationAttributeOptionService {

  constructor(private httpClient: HttpClient) { }

  private url(url: string) {
    return `${environment.hostUrl}${url}`;
  }

  public create(applicationAttributeId: number, applicationAttributeOption: ApplicationAttributeOptionInterface): Promise<ApplicationAttributeOptionInterface> {
    return this.httpClient.post<{ roleAttrOptn: ApplicationAttributeOptionInterface }>(this.url('/roleattributeoption/create'), {
      roleAttrId: applicationAttributeId,
      roleAttrOptn: applicationAttributeOption
    })
    .toPromise()
    .then(response => response.roleAttrOptn);
  }

  public update(applicationAttributeId: number, applicationAttributeOption: ApplicationAttributeOptionInterface): Promise<ApplicationAttributeOptionInterface> {
    return this.httpClient.post<{ roleAttrOptn: ApplicationAttributeOptionInterface }>(this.url('/roleattributeoption/update'), {
      roleAttrId: applicationAttributeId,
      roleAttrOptn: applicationAttributeOption
    }).toPromise()
    .then(response => response.roleAttrOptn);
  }

  public delete(applicationAttrId: number, applicationAttribute: ApplicationAttributeOptionInterface) {
    return this.httpClient.post(this.url('/roleattributeoption/delete'), {
      roleAttrId: applicationAttrId,
      roleAttrOptn: applicationAttribute
    }).toPromise();
  }

}
