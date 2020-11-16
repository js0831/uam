import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './../../../../shared/services/modal.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { edit, remove, set } from './../../store/attribute.actions';
import { ApplicationAttributeService } from '../../../../shared/services/application-attribute.service';
import { ApplicationAttributeInterface } from '../../../../shared/interface/application-attribute.interface';

@Component({
  selector: 'app-attribute-maintenance-list',
  templateUrl: './attribute-maintenance-list.component.html',
  styleUrls: ['./attribute-maintenance-list.component.scss']
})
export class AttributeMaintenanceListComponent implements OnInit, OnDestroy{

  attributes$: Observable<ApplicationAttributeInterface>;

  constructor(
    private modalService: ModalService,
    private applicationAttributeService: ApplicationAttributeService,
    private store: Store<{attribute: ApplicationAttributeInterface}>
  ) {
    this.attributes$ = store.select('attribute');
  }

  async ngOnInit(): Promise<void> {
    const attributes = await this.applicationAttributeService.fetch();
    this.store.dispatch(set({ payload: attributes }))
  }

  ngOnDestroy(): void {
    this.modalService.reset();
  }


  add(): void {
    this.modalService.showModal('ATTRIBUTE_FORM', true);
  }

  delete(attr): void{
    const sure = confirm('Are you sure?');
    if (!sure) { return; }

    this.store.dispatch(remove({
      id: attr.guid
    }));
  }

  edit(attr): void{
    this.store.dispatch(edit({
      attribute: attr
    }));
  }
}
