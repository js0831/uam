import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/i-event';

export const EVENTS = {
  SHOW_ADD_APP_MODAL: 'SHOW_ADD_APP_MODAL'
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private event: EventEmitter<IEvent> = new EventEmitter<IEvent>();

  constructor() { }

  dispatch(event: IEvent): void {
    this.event.emit(event);
  }

  getEvent(): Observable<IEvent> {
    return this.event.asObservable();
  } 

}
