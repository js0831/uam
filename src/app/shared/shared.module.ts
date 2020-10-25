import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LanguageFieldComponent } from './components/language-field/language-field.component';
import { ItranslatePipe } from './pipes/itranslate.pipe';
import { MultipleSelectionComponent } from './components/multiple-selection/multiple-selection.component';

@NgModule({
  declarations: [
    ModalComponent,
    LanguageFieldComponent,
    ItranslatePipe,
    MultipleSelectionComponent,
  ],
  exports: [
    ModalComponent,
    LanguageFieldComponent,
    ItranslatePipe,
    MultipleSelectionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class SharedModule { }
