import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { attributeReducer } from './modules/attribute-maintenance/store/attribute.reducer';
import { applicationReducer } from './modules/application-maintenance/store/application.reducer';
import { applicationAttributesReducer } from './modules/application-maintenance/store/application-attributes.reducer';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      attribute: attributeReducer,
      application: applicationReducer,
      applicationAttributes: applicationAttributesReducer,
    }),
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
