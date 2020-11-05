import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAttribute } from 'src/app/modules/attribute-maintenance/interface/attribute.interface';
import { IDateRange } from 'src/app/shared/interface/daterange.interface';
import { LocalDataService } from 'src/app/shared/services/local-data.service';

@Component({
  selector: 'app-assigned-general-role-attributes',
  templateUrl: './assigned-general-role-attributes.component.html',
  styleUrls: ['./assigned-general-role-attributes.component.scss']
})
export class AssignedGeneralRoleAttributesComponent implements OnInit {

  @Input() data: {
    daterange: IDateRange,
    attributes: IAttribute[],
    generalRole: any,
  }[];
  dummyGeneralRoles = this.localData.get('dummy-general-roles') || {
    organization : [],
    team : [],
    channel : [],
    jobrole : [],
  };

  @Output() ondelete = new EventEmitter<number>();

  constructor(
    private localData: LocalDataService
  ) { }

  ngOnInit(): void {
  }

  remove(index: number ): void {
    this.ondelete.emit(index);
  }

  displayGeneralRole(field: string, id: string): string {
    return this.dummyGeneralRoles[field].filter( x => x.id.toString() === id)[0].name;
  }
}
