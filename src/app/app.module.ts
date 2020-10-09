import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvisioningComponent } from './provisioning/provisioning.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JkWaitModule } from 'jk-wait';

@NgModule({
  declarations: [
    AppComponent,
    ProvisioningComponent
  ],
  imports: [
    BrowserModule,
    JkWaitModule.forRoot({type: 'SPINNER'}),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
