import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApplication } from '../../modules/application-maintenance/interface/application.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient: HttpClient) { }

  private url(url: string) {
    return `${environment.hostUrl}${url}`;
  }

  public getAll(limit: number = 10, offset: number = 0): Promise<IApplication[]> {
    return this.httpClient.get<{ applications: IApplication[] }>(this.url('/application/getAllApplication'))
      .toPromise()
      .then(response => response.applications);
  }

  public create(application: IApplication): Promise<IApplication> {
    return this.httpClient.post<{ application: IApplication }>(this.url('/application/createApplication'), { application })
      .toPromise()
      .then(response => response.application);
  }

  public delete(id: string): Promise<{ deleteResult: string }> {
    return this.httpClient.delete<{ deleteResult: string }>(this.url('/application/deleteApplication'), { params: { id }}).toPromise();
  }
}
