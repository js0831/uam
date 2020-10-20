import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(

  ) { }

  save(what: string, data: any): void {

    let newData = {
      [what]: data
    };

    if (!this.isEmpty(this.current)) {
      newData = {
        ...this.current,
        ...{ [what]: data }
      };
    }
    localStorage.setItem('localData', JSON.stringify(newData));
  }

  get data(): any{
    return this.current;
  }

  get(what: string ): any {
    if (this.isEmpty(this.current)) {
      return;
    }
    return this.current[what];
  }

  delete(what: string): void{
    if (this.isEmpty(this.current)) {
      return;
    }
    const clone = this.cloneObject(this.current);
    delete clone[what];
    localStorage.setItem('localData', JSON.stringify(clone));
  }

  clear(): void{
    localStorage.removeItem('localData');
  }

  private cloneObject(obj): any{
    const str = JSON.stringify(obj);
    return JSON.parse(str);
  }

  private get current(): any{
    const data = localStorage.getItem('localData');
    return data ? JSON.parse(data) : {};
  }

  private isEmpty(obj): boolean{
    return Object.keys(obj).length === 0;
  }
}
