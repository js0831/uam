import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IApplication  {
  systemId: string;
  description?: string;
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  public modalTitle: string;
  public form: FormGroup;
  public showModal = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      systemId: ['', [Validators.required]],
      description: '',
    });
  }

  showAppForm(type: string, app?: IApplication): void {
    if (type === 'add') {
      this.modalTitle = 'New Application';
    } else {
      this.modalTitle = `Edit ${app.systemId}`;
      this.form.setValue(app);
    }

    this.showModal = true;
  }

  closeModal(): void {
    this.form.reset();
    this.showModal = false;
  }


  submitForm(): void{
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.showModal = false;
    const {systemId, description}: IApplication = this.form.value;

    if (systemId) {
      // this.update({ systemId, description});
    } else {
      // this.create({ name, shortname, description});
    }

    this.form.reset();
  }
}
