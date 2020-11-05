import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private dataSource = new BehaviorSubject<
  {
    event: 'DEFAULT' | 'SHOW_MODAL' | 'RESET',
    data?: any
  }>({event: 'DEFAULT'});

  event = this.dataSource.asObservable();

  constructor() { }


  showModal(modalId: string, value: boolean): void{
    this.dataSource.next({
      event: 'SHOW_MODAL',
      data: {
        modalId,
        value
      }
    });
  }

  reset(): void{
    this.dataSource.next({
      event: 'RESET',
    });
  }
}
