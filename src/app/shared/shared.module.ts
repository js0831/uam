import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LanguageFieldComponent } from './components/language-field/language-field.component';
import { ItranslatePipe } from './pipes/itranslate.pipe';

@NgModule({
  declarations: [
    ModalComponent,
    LanguageFieldComponent,
    ItranslatePipe
  ],
  exports: [
    ModalComponent,
    LanguageFieldComponent,
    ItranslatePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class SharedModule { }
