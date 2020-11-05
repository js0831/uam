import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IApplication } from 'src/app/modules/application-maintenance/interface/application.interface';
import { IAttribute } from 'src/app/modules/attribute-maintenance/interface/attribute.interface';
import { IDateRange } from 'src/app/shared/interface/daterange.interface';

@Component({
  selector: 'app-assigned-applications-attributes',
  templateUrl: './assigned-applications-attributes.component.html',
  styleUrls: ['./assigned-applications-attributes.component.scss']
})
export class AssignedApplicationsAttributesComponent implements OnInit {

  @Input() data: {
    daterange: IDateRange,
    attributes: IAttribute[],
    applications: IApplication[],
  }[];

  @Output() ondelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(index: number ): void {
    this.ondelete.emit(index);
  }
}
