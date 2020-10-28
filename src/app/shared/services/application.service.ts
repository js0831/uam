import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ICreateApplicationRequestBody } from '../interfaces/i-create-application-request-body';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  public create(body: ICreateApplicationRequestBody) {
    return this.http.post(`${environment.apiURL}/application/createApplication`, body);
  }
}
