import { Component, OnInit } from '@angular/core';
import { EventService, ADD_NEW_GENERAL_ROLE_GROUP } from '../../../shared/services/event.service';

@Component({
  selector: 'app-from-to-date',
  templateUrl: './from-to-date.component.html',
  styleUrls: ['./from-to-date.component.scss']
})
export class FromToDateComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  add() {
    this.eventService.trigger({ type: ADD_NEW_GENERAL_ROLE_GROUP });
  }

}
