import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { JkWaitService } from 'jk-wait';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl = 'assets/config.json';

  constructor(
    private http: HttpClient,
    public wait: JkWaitService,
  ) { }

  create(what: string, data: any): Observable<any>{
    this.wait.start();
    const endpoint = `${environment.apiURL}${what}/`;
    return this.http.post(endpoint, data).pipe(map( x => {
      this.wait.end();
      return x;
    }));
  }

  update(what: string, id: string, data: any): Observable<any>{
    this.wait.start();
    const endpoint = `${environment.apiURL}${what}/${id}`;
    return this.http.put(endpoint, data).pipe(map( x => {
      this.wait.end();
      return x;
    }));
  }

  delete(what: string, id: string): Observable<any>{
    this.wait.start();
    const endpoint = `${environment.apiURL}${what}/${id}`;
    return this.http.delete(endpoint).pipe(map( x => {
      this.wait.end();
      return x;
    }));
  }

  list(ofWhat: string, params?: any): Observable<any>{
    this.wait.start();
    const paramString = params ? `?${this.objectToParams(params)}` : '';
    const endpoint = `${environment.apiURL}${ofWhat}/${paramString}`;
    return this.http.get(endpoint).pipe(map( x => {
      this.wait.end();
      return x;
    }));
  }

  listMap(ofWhat: string, params?: any): Observable<any>{
    this.wait.start();
    const paramString = params ? `?${this.objectToParams(params)}` : '';
    const endpoint = `${environment.apiURL}${ofWhat}/${paramString}`;
    return this.http.get(endpoint).pipe(
      map( (x: any) => {
        this.wait.end();
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
