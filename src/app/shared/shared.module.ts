import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LanguageFieldComponent } from './components/language-field/language-field.component';

@NgModule({
  declarations: [
    ModalComponent,
    LanguageFieldComponent
  ],
  exports: [
    ModalComponent,
    LanguageFieldComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
