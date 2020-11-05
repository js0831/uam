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
      this.attributes.push(toAdd);
      this.onchange.emit(this.attributes);
    });

    this.attribute = '';
  }

  isAlreadyAdded(attributeId: string): boolean{
    return this.attributes.filter( x => attributeId === x.guid).length > 0;
  }

  delete(attribute: IAttribute): void{
    this.attributes = this.attributes.filter( x => x.guid !== attribute.guid);
    this.onchange.emit(this.attributes);
  }
}
