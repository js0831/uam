import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IMultipleSelectionTag } from '../../interfaces/i-multiple-selection-tag';

@Component({
  selector: 'app-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.scss']
})
export class MultipleSelectionComponent implements OnInit, OnDestroy {

  @Input() selection: IMultipleSelectionTag[] = [];
  @Output() onSelectionChange: EventEmitter<IMultipleSelectionTag[]> = new EventEmitter<IMultipleSelectionTag[]>();

  public tags: IMultipleSelectionTag[] = [];
  public isSelectionVisible: boolean = false;

  ngOnInit(): void {
    this.hideSelection = this.hideSelection.bind(this);
    document.addEventListener('click', this.hideSelection);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.hideSelection);
  }

  removeTag(id: number | string): void {
    this.tags = this.tags.filter(tag => {
      if (tag.id !== id) {
        return true;
      }
      tag.active = false;
      return false;
    });
    this.onSelectionChange.emit(this.tags);
  }

  clickSelectionItem(tag: IMultipleSelectionTag): void {
    if (!tag.active) {
      tag.active = true;
      this.tags.push(tag);
      this.onSelectionChange.emit(this.tags);
    } else {
      this.removeTag(tag.id);
    }
  }

  hideSelection(): void {
    this.isSelectionVisible = false;
  }

  showSelection(event): void {
    event.stopPropagation();
    this.isSelectionVisible = true;
  }

  deleteInInputBox(event): void {
    if (event.keyCode === 8 && event.target.innerHTML === '' && this.tags.length > 0) {
      this.removeTag(this.tags[this.tags.length - 1].id);
    }
  }

}
