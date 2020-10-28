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

  public fetch(limit: number = 10, offset: number = 0): Observable<{ applications: ICustomApplicationFormat[] }> {
    return this.http.get<{ applications: ICustomApplicationFormat[] }>(`${this.url}/getAllApplication`, {
      params: {
        limit: limit.toString(),
        offset: offset.toString()
      }
    });
  }

  public delete(id: number) {
    return this.http.delete(`${this.url}/deleteApplication`, {
      params: {
        id: id.toString()
      }
    });
  }
}
