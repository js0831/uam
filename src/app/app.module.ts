import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { attributeReducer } from './modules/attribute-maintenance/store/attribute.reducer';
import { applicationReducer } from './modules/application-maintenance/store/application.reducer';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      attribute: attributeReducer,
      application: applicationReducer
    }),
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
