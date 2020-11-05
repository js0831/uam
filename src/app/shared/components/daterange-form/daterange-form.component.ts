import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDateRange } from './../../interface/daterange.interface';
@Component({
  selector: 'app-daterange-form',
  templateUrl: './daterange-form.component.html',
  styleUrls: ['./daterange-form.component.scss']
})
export class DaterangeFormComponent implements OnInit {

  @Output() onadd = new EventEmitter<IDateRange>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    // const yesterday = new Date();
    // yesterday.setDate(yesterday.getDate() - 1);
    // this.datepipe.transform(yesterday, 'yyyy-MM-dd')

    this.form = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  add(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      alert('Fields required');
      return;
    }
    const form = this.form.value;

    if (!this.isValidDateRange(form.from, form.to)) {
      alert('Invalid Date Range');
      return;
    }

    this.onadd.emit(form);
  }

  isValidDateRange(from: string, to: string): boolean {
    const dateFrom = new Date(from).getTime();
    const dateTo = new Date(to).getTime();
    return dateTo >= dateFrom;
  }
}
