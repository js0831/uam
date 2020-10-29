import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ICreateApplicationRequestBody } from '../interfaces/i-create-application-request-body';
import { ICustomApplicationFormat } from '../interfaces/i-custom-application-format';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private url = `${environment.apiURL}/application`;

  constructor(private http: HttpClient) { }

  public create(body: ICreateApplicationRequestBody) {
    return this.http.post(`${this.url}/createApplication`, body);
  }

  public getById(id: number): Observable<{ application: ICustomApplicationFormat }> {
    return this.http.get<{ application: ICustomApplicationFormat }>(`${this.url}/getApplicationById`, {
      params: {
        applicationId: id.toString()
      }
    });
  }

  public fetch(limit: number = 10, offset: number = 0): Observable<{ applications: ICustomApplicationFormat[] }> {
    return this.http.get<{ applications: ICustomApplicationFormat[] }>(`${this.url}/getAllApplication`, {
      params: {
        limit: limit.toString(),
        offset: offset.toString()
      }
    });
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/deleteApplication`, {
      params: {
        id: id.toString()
      }
    });
  }

  public update(body: ICreateApplicationRequestBody) {
    return this.http.post(`${this.url}/updateApplication`, body);
  }
}
