import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './../../../../shared/services/modal.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { edit, remove, set } from './../../store/attribute.actions';
import { ApplicationAttributeService } from '../../../../shared/services/application-attribute.service';
import { IAttributeStore } from '../../interface/attribute-store.interface';

@Component({
  selector: 'app-attribute-maintenance-list',
  templateUrl: './attribute-maintenance-list.component.html',
  styleUrls: ['./attribute-maintenance-list.component.scss']
})
export class AttributeMaintenanceListComponent implements OnInit, OnDestroy{

  attributes$: Observable<IAttributeStore>;

  constructor(
    private modalService: ModalService,
    private applicationAttributeService: ApplicationAttributeService,
    private store: Store<{attribute: IAttributeStore}>
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

  async delete(attr): Promise<void> {
    if (confirm('Are you sure you want to delete this item?')) {
      await this.applicationAttributeService.delete(attr);
      this.store.dispatch(remove({
        payload: attr.id
      }));
    }
  }

  edit(attr): void{
    this.store.dispatch(edit({
      attribute: attr
    }));
  }
}
