import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalDataService } from 'src/app/shared/services/local-data.service';
import { ModalService } from './../../../../shared/services/modal.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { edit, remove } from './../../store/attribute.actions';
import { IAttributeStore } from '../../interface/attribute-store.interface';

@Component({
  selector: 'app-attribute-maintenance-list',
  templateUrl: './attribute-maintenance-list.component.html',
  styleUrls: ['./attribute-maintenance-list.component.scss']
})
export class AttributeMaintenanceListComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  attributes$: Observable<IAttributeStore>;

  constructor(
    private modalService: ModalService,
    private localData: LocalDataService,
    private store: Store<{attribute: IAttributeStore}>
  ) {
    this.attributes$ = store.select('attribute');

    this.subscription = this.attributes$.subscribe( attributes => {
      this.localData.save('attributes', attributes.list);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
