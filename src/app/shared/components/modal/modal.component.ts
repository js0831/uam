import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  @Input() public show = false;
  @Input() public saveBtn = '';
  @Input() public closeBtn = '';
  @Input() public title = '';
  @Input() public footer = true;
  @Input() public header = true;
  @Input() public loading = false;

  public submitForm() {
    if (!this.loading) {
      this.submit.emit();
    }
  }

}
