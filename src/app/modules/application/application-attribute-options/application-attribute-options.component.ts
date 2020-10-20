import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalDataService } from 'src/app/shared/services/local-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-application-attribute-options',
  templateUrl: './application-attribute-options.component.html',
  styleUrls: ['./application-attribute-options.component.scss']
})
export class ApplicationAttributeOptionsComponent implements OnInit {

  public form: FormGroup;
  public attributeOptions = [];
  public showDescription = true;
  public editId;
  @Input() id: string;

  constructor(
    private formBuilder: FormBuilder,
    private localdata: LocalDataService,
  ) { }

  ngOnInit(): void {
    this.buildForm();

    if (environment.staticData){
      const values = this.localdata.get('attributeOptions');
      if (!values){
        return;
      }

      const attrId = this.id.replace(/\ /g, '_').toLowerCase();
      this.attributeOptions = values[`attr-opts-${attrId}`] || [];
      return;
    }
  }

  private buildForm(): void{
    this.form = this.formBuilder.group({
      value: ['', Validators.required]
    });
  }

  add(): void {
    if (this.form.invalid) {
      alert('All fields are required');
      return;
    }

    const formValues = this.form.value;

    const translations = formValues.translations.map( x => {
      return {
        keyVal: formValues.value,
        langId: Number(x.language),
        value: x.value
      };
    });
    formValues.translations = translations;
    const data = {
      id: new Date().getTime(),
      value: formValues.value,
      translations,
      default: false
    };
    if (!this.editId) {
      this.attributeOptions.push(data);
    } else {
      this.attributeOptions = this.attributeOptions.map( x => {
        if (x.id === this.editId) {
          return data;
        }
        return x;
      });
    }


    this.form.reset();
    this.showDescription = false;
    this.saveLocalData();
    setTimeout( x => {
      this.showDescription = true;
    }, 100);
  }

  setDefault(id, value): void{
    this.attributeOptions.map( x => {
      if (id === x.id) {
        x.default = !value;
      } else {
        x.default = false;
      }
      return x;
    });
    this.saveLocalData();
  }

  edit(option): void{
    this.editId = option.id;
    this.form.get('value').patchValue(option.value);
    this.showDescription = false;
    setTimeout( x => {
      this.showDescription = true;
      this.appendCurrentTranslations(option.translations);
    });
  }

  cancelEdit(): void{
    this.editId = null;
    this.form.reset();
    this.showDescription = false;
    setTimeout( x => {
      this.showDescription = true;
    });
  }

  private appendCurrentTranslations(translations: any[]): void{
    this.form.removeControl('translations');
    this.form.addControl('translations', this.formBuilder.array([], Validators.required));

    translations.forEach( x => {
      const group = this.formBuilder.group({
        language: [x.langId.toString(), Validators.required],
        value: [x.value, Validators.required]
      });
      (this.form.get('translations') as FormArray).push(group);
    });
  }

  delete(id): void{
    const sure = confirm('Are you sure?');
    if (!sure) {
      return;
    }

    this.attributeOptions = this.attributeOptions.filter( x => x.id !== id);
    this.saveLocalData();
  }

  private saveLocalData(): void {
    const attrId = this.id.replace(/\ /g, '_').toLowerCase();
    const toSave = {
      ['attr-opts-' + attrId]: this.attributeOptions
    };
    const oldvalues = this.localdata.get('attributeOptions');
    if (!oldvalues){
      this.localdata.save('attributeOptions', {
        ...toSave
      });
    } else {
      this.localdata.save('attributeOptions', {
        ...oldvalues,
        ...toSave
      });
    }
  }
}
