import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface IApplicationAttribute  {
  id: string;
  title: string;
  type: string;
}

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.scss']
})
export class ApplicationViewComponent implements OnInit {

  public modalTitle: string;
  public form: FormGroup;
  public showModal = false;

  // TEMP
  activeTab = 'details';

constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }


  showAppForm(type: string, app?: IApplicationAttribute): void {
    if (type === 'add') {
      this.modalTitle = 'New Attibute';
    } else {
      this.modalTitle = `Edit ${app.id}`;
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
    const {id, title, type}: IApplicationAttribute = this.form.value;

    if (id) {
      // this.update({ systemId, description});
    } else {
      // this.create({ name, shortname, description});
    }

    this.form.reset();
  }
}
