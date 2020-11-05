import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAttributeStore } from 'src/app/modules/attribute-maintenance/interface/attribute-store.interface';
import { IAttribute } from 'src/app/modules/attribute-maintenance/interface/attribute.interface';

@Component({
  selector: 'app-attributes-list',
  templateUrl: './attributes-list.component.html',
  styleUrls: ['./attributes-list.component.scss']
})
export class AttributesListComponent implements OnInit {

  @Output() onchange = new EventEmitter<IAttribute[]>();
  @Input() current: IAttribute[] = [];

  attribute = '';
  attributes$: Observable<IAttributeStore>;
  attributes: IAttribute[] = [];

  dragging: IAttribute;
  dropping: IAttribute;

  constructor(
    private store: Store<{attribute: IAttributeStore}>
  ) {
    this.attributes$ = store.select('attribute');
  }

  ngOnInit(): void {
    if (this.current) {
      this.attributes = [...this.current] || [];
    }
  }

  add(): void {
    if (!this.attribute) { return; }
    this.attributes$.subscribe( (x: IAttributeStore) => {
      const toAdd = x.list.filter(attr => attr.guid === this.attribute)[0];

      const attributeOrder = this.generateOrderNumber();

      this.attributes.push({
        ...toAdd,
        order: attributeOrder
      });

      this.onchange.emit(this.attributes);
    });

    this.attribute = '';
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
    return this.attributes.filter( x => attributeId === x.guid).length > 0;
  }

  delete(attribute: IAttribute): void{
    this.attributes = this.attributes.filter( x => x.guid !== attribute.guid);
    this.onchange.emit(this.attributes);
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
