import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl = 'assets/config.json';

  constructor(
    private http: HttpClient
  ) { }

  create(what: string, data: any): Observable<any>{
    const endpoint = `${environment.apiURL}${what}/`;
    return this.http.post(endpoint, data);
  }

  update(what: string, id: string, data: any): Observable<any>{
    const endpoint = `${environment.apiURL}${what}/${id}`;
    return this.http.put(endpoint, data);
  }

  delete(what: string, id: string): Observable<any>{
    const endpoint = `${environment.apiURL}${what}/${id}`;
    return this.http.delete(endpoint);
  }

  list(ofWhat: string, params?: any): Observable<any>{
    const paramString = params ? `?${this.objectToParams(params)}` : '';
    const endpoint = `${environment.apiURL}${ofWhat}/${paramString}`;
    return this.http.get(endpoint);
  }

  listMap(ofWhat: string, params?: any): Observable<any>{
    const paramString = params ? `?${this.objectToParams(params)}` : '';
    const endpoint = `${environment.apiURL}${ofWhat}/${paramString}`;
    return this.http.get(endpoint).pipe(
      map( (x: any) => {
        console.log(x);
        return {
          data: x.content,
          count: x.totalElements,
          totalPage: x.totalPages
        };
      })
    );
  }

  private objectToParams(obj: any): string{
    const keys = Object.keys(obj);
    let paramsString = '';
    keys.forEach( key => {
      paramsString += `${key}=${obj[key]}&`;
    });
    return paramsString.slice(0, -1);
  }
}
