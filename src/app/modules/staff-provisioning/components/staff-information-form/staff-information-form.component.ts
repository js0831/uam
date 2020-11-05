import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-information-form',
  templateUrl: './staff-information-form.component.html',
  styleUrls: ['./staff-information-form.component.scss']
})
export class StaffInformationFormComponent implements OnInit {

  @Input() parentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.parentForm.addControl('information', this.fb.group({
      staffNumber: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }));
  }

  isInvalid(name): boolean {
    const control = this.parentForm.get('information').get(name);
    return control.invalid && control.touched;
  }
}
