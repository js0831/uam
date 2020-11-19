import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAttributeStore } from 'src/app/modules/attribute-maintenance/interface/attribute-store.interface';
import { IAttribute } from 'src/app/modules/attribute-maintenance/interface/attribute.interface';
import { addApplicationAttributeToListAction, removeApplicationAttributeFromListAction } from '../../../modules/application-maintenance/store/application-attributes.actions';
import { ApplicationAttributesStoreInterface } from '../../../modules/attribute-maintenance/interface/application-attributes-store.interface';
import { set } from '../../../modules/attribute-maintenance/store/attribute.actions';
import { ApplicationAttributeInterface } from '../../interface/application-attribute.interface';
import { ApplicationAttributeService } from '../../services/application-attribute.service';
import { AttributeAssignmentService } from '../../services/attribute-assignment.service';

@Component({
  selector: 'app-attributes-list',
  templateUrl: './attributes-list.component.html',
  styleUrls: ['./attributes-list.component.scss']
})
export class AttributesListComponent implements OnInit {

  @Output() onchange = new EventEmitter<IAttribute[]>();

  attribute: any = '';
  attributes$: Observable<IAttributeStore>;

  attributes: ApplicationAttributeInterface[] = [];

  dragging: IAttribute;
  dropping: IAttribute;

  constructor(
    private store: Store<{attribute: IAttributeStore, applicationAttributes: ApplicationAttributesStoreInterface}>,
    private attributeAssignmentService: AttributeAssignmentService,
    private applicationAttributeService: ApplicationAttributeService,
    private activatedRoute: ActivatedRoute
  ) {

    this.attributes$ = store.select('attribute');
  }

  ngOnInit(): void {
    this.fetchAllApplicationAttributes();
    this.store.select('applicationAttributes').subscribe(attributes => {
      this.attributes = attributes.list;
    });
  }

  private async fetchAllApplicationAttributes() {
    const attributes = await this.applicationAttributeService.fetch();
    this.store.dispatch(set({ payload: attributes }));
  }

  async add(): Promise<void> {
    if (!this.attribute) { return; }
    const response = await this.attributeAssignmentService.create({
      applicationId: this.activatedRoute.snapshot.params.id,
      attbId: this.attribute,
      orderIndex: this.attributes.length
    }, [...this.attributes.map(item => item.id), this.attribute]);
    this.store.dispatch(addApplicationAttributeToListAction({ payload: response[response.length - 1] }))
  }

  generateOrderNumber(): number {
    if (this.attributes.length === 0) {
      return 1;
    }
    let lastOrder = 0;
    this.attributes.forEach( x => {
      lastOrder = x.order > lastOrder ? x.order : lastOrder;
    });
    return lastOrder + 1;
  }

  isAlreadyAdded(attributeId: string): boolean{
    return this.attributes.filter(x => attributeId === x.id).length > 0;
  }

  async delete(attribute: ApplicationAttributeInterface): Promise<void> {
    if (confirm('Are you sure you wan\'t to delete this item?')) {
      const appOrdering = {
        applicationId: this.activatedRoute.snapshot.params.id,
        attbId: attribute.id,
        orderIndex: this.attributes.length
      };
      const orderList = [...this.attributes.map(item => item.id)].filter(item => item !== attribute.id);
      await this.attributeAssignmentService.delete(appOrdering, orderList);
      this.store.dispatch(removeApplicationAttributeFromListAction({ payload: attribute }))
    }
  }



  drag(event, attribute: IAttribute): void {
    this.dragging = attribute;
    event.dataTransfer.setData('attr', JSON.stringify(attribute));
  }

  dragend(): void{
    this.dragging = null;
    this.dropping = null;
  }

  allowDrop(ev, attribute: IAttribute): void{
    ev.preventDefault();
    this.dropping = attribute;
  }

  drop(ev, attribute: IAttribute): void{
    ev.preventDefault();
    const data = JSON.parse(ev.dataTransfer.getData('attr'));
    const newOrder = attribute.order;
    if (attribute.guid === data.guid) { return; }

    this.updateAttributeOrder(data, newOrder);
    this.onchange.emit(this.attributes);
    this.dragend();
  }

  updateAttributeOrder(draggedAttribute: IAttribute, droppedOrder: number): void {

    this.attributes = this.attributes.map( x => {
      if (draggedAttribute.order > droppedOrder) {
        if (x.order === draggedAttribute.order){
          return { ...x, order: droppedOrder };
        } else if (x.order >= droppedOrder && x.order <= draggedAttribute.order) {
          return { ...x, order: x.order + 1 };
        }
      } else {
        if (x.order === draggedAttribute.order){
          return { ...x, order: droppedOrder };
        } else if ( x.order <= droppedOrder && x.order >= draggedAttribute.order) {
          return { ...x, order: x.order - 1 };
        }
      }
      return x;
    });
    this.attributes.sort((a, b) => a.order < b.order ? -1 : (a.order > b.order ? 1 : 0));
  }

}
