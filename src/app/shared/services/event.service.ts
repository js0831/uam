import { EventEmitter, Injectable } from '@angular/core';

export const ADD_NEW_GENERAL_ROLE_GROUP = 'ADD_NEW_GENERAL_ROLE_GROUP';

interface IEvent {
  type: string;
  payload?: any;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  event: EventEmitter<IEvent> = new EventEmitter<IEvent>();

  constructor() { }

  trigger(event: IEvent) {
    this.event.emit(event);
  }

  get() {
    return this.event.asObservable();
  }
}
