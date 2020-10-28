import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as applicationManagementReducer from './shared/store/reducers/application-management.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JkWaitModule } from 'jk-wait';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    JkWaitModule.forRoot({type: 'SPINNER'}),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      applicationManagement: applicationManagementReducer.reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
