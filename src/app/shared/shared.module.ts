import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralRoleFormComponent } from './components/general-role-form/general-role-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { LanguageFieldComponent } from './components/language-field/language-field.component';
import { ItranslatePipe } from './../shared/pipes/itranslate.pipe';
import { AttributesListComponent } from './components/attributes-list/attributes-list.component';
import { DaterangeFormComponent } from './components/daterange-form/daterange-form.component';

@NgModule({
  declarations: [
    GeneralRoleFormComponent,
    ModalComponent,
    LanguageFieldComponent,
    ItranslatePipe,
    AttributesListComponent,
    DaterangeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralRoleFormComponent,
    ModalComponent,
    LanguageFieldComponent,
    ItranslatePipe,
    AttributesListComponent,
    DaterangeFormComponent
  ]
})
export class SharedModule { }
